"use client";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_syz6yoo", "template_q6z5hue", form.current, "e-tUlHJlOTz4QKTCO")
        .then((result) => {
          console.log(result.text);
          form.current!.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };
  return (
    <section id="contact" className="py-10">
      <div className="w-[89%] mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
              <div className="mb-6">
                <h1 className=" text-base font-medium mb-2">Email Address</h1>
                <a className="text-gray-400 text-sm font-medium" href="mailto:support.yourdomain@email.com">
                  support@moonlamps.com
                </a>
              </div>

              <div className="mb-6">
                <h1 className=" text-base font-medium mb-2">Telephone</h1>
                <a className="text-gray-400 text-sm font-medium" href="tel:+(123) 456-7890">
                  (123) 456-7890
                </a>
              </div>

              <div className="mb-6">
                <h1 className=" text-base font-medium mb-2">Address</h1>
                <h1 className="text-gray-400 text-sm">123 Elon Musk parkway drive Raleigh, NC 12302</h1>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-300 text-gray-900 text-sm block w-full p-3"
                    placeholder="Your Name"
                  />

                  <input
                    type="email"
                    className="border border-gray-300 text-gray-900 text-sm block w-full p-3"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="border border-gray-300 text-gray-900 text-sm block w-full p-3"
                />

                <textarea
                  className="border border-gray-300 text-gray-900 text-sm block w-full p-3"
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  rows={3}
                  style={{ resize: "none" }}
                ></textarea>

                <div className="text-right">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="py-4 px-6 rounded-full uppercase cursor-pointer text-sm transition-all bg-slate-800 hover:bg-black text-white"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
