import Profile from "../components/ui/Profile";

const ContactPage = () => {
  return (
    <section className="container px-4 mx-auto my-8 lg:grid lg:grid-cols-12 lg:gap-4 xl:gap-8">
      <div className="lg:col-span-9 xl:col-span-10">
        <h1 className="my-8 text-3xl">İletişim</h1>
        <form className="max-w-5xl mr-auto">
          <div className="flex flex-col justify-between gap-4 mb-4 inputs lg:flex-row lg:gap-8">
            <div className="flex flex-col w-full gap-2">
              {/* Name Block */}
              <label className="text-gray-500" htmlFor="name">
                İsim
              </label>
              <input
                type="text"
                id="name"
                className="p-2 border rounded focus:outline-none focus:caret-green-700"
                autoComplete="off"
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
                Email
              </label>
              <input
                type="email"
                id="email"
                className="p-2 border rounded focus:outline-none focus:caret-green-700"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {/* Email Block */}
            <label className="text-gray-500" htmlFor="message">
              Mesaj
            </label>
            <textarea
              id="message"
              rows={7}
              className="p-2 font-light border rounded resize-y focus:outline-none focus:caret-green-700"
              autoComplete="off"
            />
          </div>
        </form>
      </div>

      <aside className="hidden lg:flex lg:flex-col lg:justify-center lg:col-span-3 xl:col-span-2 lg:gap-8">
        <Profile />
      </aside>
    </section>
  );
};

export default ContactPage;
