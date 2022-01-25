import { useState } from "react";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Create sending function with timeout
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.elements.name;
    const phone = e.target.elements.phone;
    const email = e.target.elements.email;
    const message = e.target.elements.message;
    const data = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    };
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      name.value = "";
      phone.value = "";
      email.value = "";
      message.value = "";
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 2000);
    }, 1500);
  };

  return (
    <form className="relative max-w-5xl mr-auto" onSubmit={submitHandler}>
      <div className="flex flex-col justify-between gap-4 mb-12 inputs lg:flex-row lg:gap-8">
        <div className="flex flex-col w-full gap-2">
          {/* Name Block */}
          <label className="text-gray-500" htmlFor="name">
            *İsim
          </label>
          <input
            type="text"
            id="name"
            className="p-2 border rounded focus:outline-none focus:caret-violet-600 dark:bg-gray-800 dark:text-slate-200 dark:border-gray-700"
            autoComplete="off"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          {/* Phone Block */}
          <label className="text-gray-500" htmlFor="phone">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="p-2 border rounded focus:outline-none focus:caret-violet-600 dark:bg-gray-800 dark:text-slate-200 dark:border-gray-700"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          {/* Email Block */}
          <label className="text-gray-500" htmlFor="email">
            *Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 border rounded focus:outline-none focus:caret-violet-600 dark:bg-gray-800 dark:text-slate-200 dark:border-gray-700"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-8">
        {/* Email Block */}
        <label className="text-gray-500" htmlFor="message">
          *Mesaj
        </label>
        <textarea
          className="p-2 font-light border rounded md:resize-y focus:outline-none focus:caret-violet-600 dark:bg-gray-800 dark:text-slate-200 dark:border-gray-700 resize-none md:min-h-[100px]"
          id="message"
          name="message"
          rows={7}
          spellCheck="false"
          autoComplete="off"
          required
        />
      </div>
      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          className="px-4 py-2 my-4 text-white transition-all rounded bg-violet-600 hover:bg-violet-500"
        >
          Mesajı Gönder
        </button>
      </div>
      {isSending || isSent ? (
        <div className="absolute text-xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {isSending ? (
            <p className="text-gray-900">Gönderiliyor...</p>
          ) : (
            <p className="text-green-800">Mesajınız Gönderildi!</p>
          )}
        </div>
      ) : null}
    </form>
  );
};

export default ContactForm;
