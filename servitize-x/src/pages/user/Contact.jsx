

import UserDashboardLayout from "../../layouts/UserDashboardLayout";

export default function Contact() {
  return (
    <UserDashboardLayout>
      <div className="bg-[#27348B] min-h-[calc(100vh-72px)] px-16 py-12 text-white">

       
        <div className="mb-12">
          <p className="text-lg">Contact us</p>
          <h1 className="text-3xl text-[#16B5E8] font-semibold mt-1">
            Get In Touch With Our Team
          </h1>
          <p className="text-sm mt-2 opacity-80">
            Reach out to us. We are here to answer your questions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-20 items-start">


          <div className="bg-[#7278A8] rounded-2xl p-10 text-black w-[420px]">
            <h2 className="text-xl font-semibold mb-6">
              Let’s talk about your questions
            </h2>

            <form className="space-y-4">
              <Input label="Name" placeholder="Your full name" />
              <Input label="Email Address" placeholder="We’ll get back to you here" />
              <Input label="Company Name" placeholder="Let us know who you represent" />
              <Input label="Subject" placeholder="What’s this about ?" />
              <Textarea label="Message" placeholder="Tell us how we can help" />

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-[#1E40FF] text-white px-10 py-2 rounded-full text-sm font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>


          <div className="space-y-6 max-w-md">
            <h2 className="text-xl text-[#16B5E8] font-semibold">
              Prefer a Direct Approach ?
            </h2>

            <div className="text-sm space-y-2">
              <p>📞 +01-1298128192</p>
              <p>✉️ contact@gmail.com</p>
              <p>🕒 Monday to Friday, 9:30 am - 5 pm (IST)</p>
            </div>

            <div className="text-sm">
              <p className="font-semibold mt-4">📍 Visit Our Office</p>
              <p>
                Plot No. 229/239, Kherki Daula, Sector 76,
                Gurugram, Haryana - 122012
              </p>
            </div>


            <div className="bg-white rounded-xl overflow-hidden mt-6">
              <iframe
                title="Sonepar Office Map"
                src="https://www.google.com/maps?q=Sonepar%20India%20Gurugram&output=embed"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <div className="text-center py-2">
                <button className="bg-[#1E40FF] text-white px-6 py-1 rounded-full text-sm">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </UserDashboardLayout>
  );
}


function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm mb-1">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-md text-sm bg-[#FFF7F5] outline-none"
      />
    </div>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm mb-1">
        {label}
      </label>
      <textarea
        rows={2}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-md text-sm bg-[#FFF7F5] outline-none resize-none"
      />
    </div>
  );
}
