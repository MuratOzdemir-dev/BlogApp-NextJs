import ContactForm from "../components/contact/ContactForm";
import Profile from "../components/ui/Profile";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>İletişim</title>
        <meta name="description" content="Benimle iletişime geçebilirsiniz." />
      </Head>
      <section className="container px-4 mx-auto my-8 lg:grid lg:grid-cols-12 lg:gap-4 xl:gap-8">
        <div className="lg:col-span-9 xl:col-span-10">
          <h1 className="my-8 text-3xl">İletişim</h1>
          <ContactForm />
        </div>

        <aside className="hidden lg:flex lg:flex-col lg:justify-center lg:col-span-3 xl:col-span-2 lg:gap-8">
          <Profile />
        </aside>
      </section>
    </>
  );
};

export default ContactPage;
