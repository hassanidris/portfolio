"use client";
import { useRef, useState } from "react";
import { slideInFromLeft, variants } from "@/utils/motion";
import { useInView, motion, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

interface Props {
  serviceKey: string;
  templateKey: string;
  publicKey: string;
}

const Contact = ({ serviceKey, templateKey, publicKey }: Props) => {
  // An handsome Angle helped with adding a `null`
  const ref = useRef<HTMLFormElement | null>(null);
  // Since you're using TypeScript, those hook must be Typed if TS can not figure out the type on it's own.
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current && serviceKey && templateKey && publicKey) {
      try {
        const result = await emailjs.sendForm(
          // "service_halud3g",
          // "template_fjqifw8",
          // formRef.current,
          // "SRbd2l1ILy5Rz0jsm"

          // Trying to make it .env variables
          serviceKey,
          templateKey,
          formRef.current,
          publicKey
        );

        setSuccess(true);
      } catch (error) {
        setError(true);
      }
    }
  };

  return (
    <motion.section
      variants={variants}
      id="contact"
      className=" text-white h-screen w-full md:max-w-[1440px] m-auto p-2.5 flex flex-col md:flex-row items-center md:gap-12"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className=" flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-5 md:gap-10"
      >
        <motion.h1
          variants={variants}
          className=" text-4xl md:text-6xl font-bold leading-[45px] md:leading-[88px] w-[10ch]"
        >
          Let&apos;s work together
        </motion.h1>
        <p className="mt-3">
          With a previous background experience in UI/UX design, I have now
          decided to expand my knowledge to become a Frontend Developer and I am
          looking for an internship. I am deeply passionate about my work while
          always eager to keep up to date with latest technologys within the
          industry. I am a fast learner and very goal orientated and with my
          background and knowledge I hope to become a great asset to your
          company.
        </p>
        <motion.div className="item">
          <p className=" text-3xl font-bold">Mail</p>
          <span>hassan.creative@gmail.com</span>
        </motion.div>
        {/* <motion.div className="item">
          <p className=" text-3xl font-bold">Address</p>
          <span>Eskilstuna, Sweden</span>
        </motion.div> */}
        <motion.div className="item">
          <p className=" text-3xl font-bold">Phone</p>
          <span>+46 73-725 79 71</span>
        </motion.div>
      </motion.div>
      <div className=" w-full p-12 relative flex-1">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          name="contact"
          method="post"
          className=" flex flex-col gap-5"
        >
          <input
            className=" p-2.5 md:p-5 bg-transparent border border-white rounded"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className=" p-2.5 md:p-5 bg-transparent border border-white rounded"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className=" p-2.5 md:p-5 bg-transparent border border-white rounded"
            rows={10}
            placeholder="Message"
            name="message"
          />
          <button className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
            Submit
          </button>
          {error && <p>Error</p>}
          {success && <p>Success</p>}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
