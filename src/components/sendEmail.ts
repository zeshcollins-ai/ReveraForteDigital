import emailjs from '@emailjs/browser';

export const sendEmail = (form: HTMLFormElement) => {
  emailjs
    .sendForm(
      'service_o1g2jn2', // Replace with your EmailJS Service ID
      'template_12x8349', // Replace with your EmailJS Template ID
      form,
      'VTFRY_TDhjXiiw20v' // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
        form.reset();
      },
      (error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send the message. Please try again later.');
      }
    );
};
