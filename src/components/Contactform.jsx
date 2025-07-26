function Contactform() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row px-4 mt-16 gap-8">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <form className="w-full max-w-lg rounded-xl bg-primary-light shadow-xl p-6">
            <h2 className="text-ternary-dark font-general-bold text-3xl mb-6">
              Contact Form
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-ternary-dark text-lg mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-ternary-dark text-lg mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-ternary-dark text-lg mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-ternary-dark text-lg mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Type your message here..."
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark resize-none"
              ></textarea>
            </div>
            <div className="flex items-center justify-center mb-4">
              <button className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-2xl">
                <span className="text-2xl font-general-medium text-white mb-1">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
        {/* Contact Details */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-lg flex flex-col justify-center bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-ternary-dark font-general-bold text-3xl mb-6">
              Contact Details
            </h2>
            <div className="mb-4">
              <p className="text-lg text-ternary-dark font-general-regular">
                <span className="font-bold">Address:</span> 123 Main Street,
                London, UK
              </p>
            </div>
            <div className="mb-4">
              <p className="text-lg text-ternary-dark font-general-regular">
                <span className="font-bold">Phone:</span> +44 20 1234 5678
              </p>
            </div>
            <div className="mb-4">
              <p className="text-lg text-ternary-dark font-general-regular">
                <span className="font-bold">Email:</span> contact@yourdomain.com
              </p>
            </div>
            {/* Add your social media handles here if needed */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Contactform;
