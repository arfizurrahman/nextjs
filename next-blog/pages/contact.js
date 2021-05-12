import Head from "next/head";
import React, { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Arfiz's Blog - Contact Page</title>
        <meta
          name='description'
          content="Contact me for any kind of queries. Or let's have a coffee."
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
