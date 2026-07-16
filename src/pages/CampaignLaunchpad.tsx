import React, { useState, useEffect } from 'react';

const CampaignLaunchpad = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [delay, setDelay] = useState('60'); // Default to 60 seconds
  const [csvFile, setCsvFile] = useState(null);
  const [headers, setHeaders] = useState([]);
  const [nameColumn, setNameColumn] = useState(0); // Preset to 0 (use a number)
  const [emailColumn, setEmailColumn] = useState(0); // Preset to 0 (use a number)
  const [csvData, setCsvData] = useState([]);
  const [emailStatus, setEmailStatus] = useState([]);

  // Get user info from sessionStorage
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password');

    if (storedEmail && storedPassword) {
      setUser({ email: storedEmail, password: storedPassword });
      setEmail(storedEmail);
      setPassword(storedPassword);
    } else {
      console.log("User session not found, redirecting to login...");
      window.location.href = '/login'; // Adjust the path if necessary
    }
  }, []);

  const handleCsvUpload = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const rows = e.target.result.split('\n').map((row) => row.split(','));
      setHeaders(rows[0]); // First row as headers
      setCsvData(rows.slice(1)); // Rest as data
    };
    reader.readAsText(file);
  };

  const handleSubmit = async () => {
    // Validate input
    console.log({ subject, emailBody, delay, nameColumn, emailColumn, csvFile });

    // Validate input
    if (!subject || !emailBody || !delay || !nameColumn || !emailColumn || !csvFile) {
      alert('Please fill out all fields.');
      return;
    }

    // Initialize email status for tracking
    const statusArray = csvData.map((row) => ({
      name: row[nameColumn],
      email: row[emailColumn],
      status: 'Pending'
    }));
    setEmailStatus(statusArray);

    // Generate a unique campaign ID
    const campaignId = `campaign-${Date.now()}`;

    // Prepare data for insertion
    const campaignData = csvData.map((row) => ({
      campaignId,
      name: row[nameColumn],
      email: row[emailColumn],
      subject,
      emailBody,
      delay
    }));

    // Launch campaign
    try {
      const response = await fetch('https://localhost:5173/store-campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          campaignId,
          name,
          email,
          password,
          subject,
          emailBody,
          delay,
          campaignData, // Send all CSV data
        }),
        credentials: 'include', // Include session cookie in the request
      });

      const result = await response.json();
      if (response.ok) {
        alert('Campaign launched successfully!');
      } else {
        alert(result.message || 'Error launching campaign.');
      }
    } catch (err) {
      alert('Error connecting to the server.');
    }
  };

  const delayOptions = [
    { value: 60, label: '1 minute' },
    { value: 120, label: '2 minutes' },
    { value: 300, label: '5 minutes' },
    { value: 420, label: '7 minutes' },
    { value: 600, label: '10 minutes' },
    { value: 1200, label: '20 minutes' },
    { value: 1800, label: '30 minutes' },
    { value: 2700, label: '45 minutes' },
    { value: 3600, label: '1 hour' }
  ];

  const handleDelayChange = (e) => {
    setDelay(e.target.value);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8 mt-16">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Campaign Launchpad</h1>
        <div className="space-y-4">
          {/* Form fields */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 bg-gray-700 text-white rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full mt-1 bg-gray-700 text-white rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              disabled
              className="w-full mt-1 bg-gray-700 text-white rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Subject Line</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full mt-1 bg-gray-700 text-white rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Body</label>
            <textarea
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              className="w-full mt-1 bg-gray-700 text-white rounded-lg p-2"
              rows="5"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Delay Between Emails</label>
            <select
              value={delay}
              onChange={handleDelayChange}
              className="w-full mt-1 bg-gray-700 text-white rounded-lg p-2"
            >
              {delayOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Upload CSV</label>
            <input
              type="file"
              accept=".csv"
              onChange={handleCsvUpload}
              className="w-full mt-1 bg-gray-700 text-white rounded-lg p-2"
            />
          </div>
          {headers.length > 0 && (
            <>
              <div>
                <label className="block text-sm font-medium">Map Name Column</label>
                <select
  value={nameColumn}
  onChange={(e) => {
    // Convert value to number
    setNameColumn(Number(e.target.value));
  }}
  className="w-full mt-1 bg-gray-700 text-white rounded-lg p-2"
>
  {headers.map((header, idx) => (
    <option key={idx} value={idx}>{header}</option>  
  ))}
</select>

              </div>

              <div>
                <label className="block text-sm font-medium">Map Email Column</label>
               <select
  value={emailColumn}
  onChange={(e) => {
    // Convert value to number
    setEmailColumn(Number(e.target.value));
  }}
  className="w-full mt-1 bg-gray-700 text-white rounded-lg p-2"
>
  {headers.map((header, idx) => (
    <option key={idx} value={idx}>{header}</option>  
  ))}
</select>

              </div>
            </>
          )}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Launch Campaign
          </button>

          {/* Email Status Tracking */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Email Sending Status</h2>
            <table className="min-w-full bg-gray-700 rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {emailStatus.map((status, idx) => (
                  <tr key={idx} className="border-b border-gray-600">
                    <td className="px-4 py-2">{status.name}</td>
                    <td className="px-4 py-2">{status.email}</td>
                    <td className="px-4 py-2">{status.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignLaunchpad;
