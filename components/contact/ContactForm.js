import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Create sending function with timeout
  const submitHandler = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 1000);
  };

  if (isSending) {
    return (
      <div className="text-center">
        <p>Mesajınız gönderiliyor...</p>
      </div>
    );
  }

  return (
    <form className="max-w-5xl mr-auto" onSubmit={submitHandler}>
      <div className="flex flex-col justify-between gap-4 mb-4 inputs lg:flex-row lg:gap-8">
        <div className="flex flex-col w-full gap-2">
          {/* Name Block */}
          <label className="text-gray-500" htmlFor="name">
            *İsim
          </label>
          <input
            type="text"
            id="name"
            className="p-2 border rounded focus:outline-none focus:caret-green-700"
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
            className="p-2 border rounded focus:outline-none focus:caret-green-700"
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
            className="p-2 border rounded focus:outline-none focus:caret-green-700"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* Email Block */}
        <label className="text-gray-500" htmlFor="message">
          *Mesaj
        </label>
        <textarea
          className="p-2 font-light border rounded md:resize-y focus:outline-none focus:caret-green-700 resize-none md:min-h-[100px]"
          id="message"
          rows={7}
          spellCheck="false"
          autoComplete="off"
          required
        />
      </div>
      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          className="px-4 py-2 my-4 text-white transition-all bg-blue-600 rounded hover:bg-blue-500"
        >
          Mesajı Gönder
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
