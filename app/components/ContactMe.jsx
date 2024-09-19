export const ContactMe = () => {
  return (
    <div className="py-20 bg-slate-950 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Contact Box */}
        <div className="max-w-3xl mx-auto p-10 bg-slate-950 rounded-xl shadow-lg border border-slate-950">
          
          {/* Heading */}
          <h2 className="text-4xl font-semibold mb-4 text-center">Lets Work Together</h2>
          <p className="text-center text-gray-400 mb-8">
            Fill out the form below to get in touch. Whether its for a project or just a quick hello, I would love to hear from you!
          </p>
          
          {/* Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg outline-none focus:ring-2 focus:ring-teal-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-slate-900 text-white rounded-lg h-32 outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="bg-teal-400 text-white py-3 px-4 rounded-lg hover:bg-teal-500 transition-all w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Extra Email section */}
        <div className="flex justify-center mt-12">
          <p className="text-gray-400 text-sm">
            Alternatively, you can <a href="mailto:haroun.kassouri@outlook.com" className="text-teal-400 hover:underline">email me directly</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

