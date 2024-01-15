// Contact.jsx
import { useState } from 'react';
import '../body/contact.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // You can add further logic here (e.g., show a success message to the user)
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <section className='contact-section'>
        <h2>{t('contact.title')}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">{t('contact.name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("placeholder.name")}
            required
          />

          <label htmlFor="email">{t('contact.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("placeholder.email")}
            required
          />

          <label htmlFor="message">{t('contact.message')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("placeholder.message")}
            required
          ></textarea>

          <button type="submit">{t('contact.send')}</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
