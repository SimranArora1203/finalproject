import React from "react";
import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";
import styles from "@/app/contact/contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We would love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.0914350260778!2d76.70150749999999!3d29.132493399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ded233043d8ff%3A0x15cb835ac3757a9c!2sGoel%20Dental%20Clinic%20and%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1695877093504!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        className={styles.mapping}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
