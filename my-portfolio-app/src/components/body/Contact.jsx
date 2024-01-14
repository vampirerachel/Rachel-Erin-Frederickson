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
    const response = await axios.post('http://localhost:3001/submitForm', formData);

    console.log('Form submitted successfully:', response.data);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};


  return (
    <div>
      <section>
        <h2>{t('Contact me')}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">{t('Name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">{t('Email Me')}</label> {/* Update the label here */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">{t('Message')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">{t('Send Message')}</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
