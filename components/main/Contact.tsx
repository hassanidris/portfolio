"use client";
import { useRef, useState } from "react";
// import { slideInFromLeft, variants } from "@/utils/motion";
import {
  useInView,
  motion,
  Variants,
  useScroll,
  useTransform,
} from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionHeader from "../sub/SectionHeader";

interface Props {
  serviceKey: string;
  templateKey: string;
  publicKey: string;
}

const Contact = ({ serviceKey, templateKey, publicKey }: Props) => {
  // An handsome Angle helped with adding a `null`
  const ref = useRef<HTMLDivElement | null>(null);
  // Since you're using TypeScript, those hook must be Typed if TS can not figure out the type on it's own.
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(formRef, { margin: "-100px" });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current && serviceKey && templateKey && publicKey) {
      try {
        const result = await emailjs.sendForm(
          // Trying to make it .env variables
          serviceKey,
          templateKey,
          formRef.current,
          publicKey,
        );

        setSuccess(true);
      } catch (error) {
        setError(true);
      }
    }
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      id="contact"
      className=" flex flex-col items-center justify-center"
    >
      <SectionHeader
        title="Contact Me"
        desc="Let's work together"
        slogen="Embrace curiosity, for it is the compass that leads to innovation"
      />
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className=" m-auto flex w-full flex-col items-center justify-start gap-8 p-2.5 text-white md:max-w-[80rem] md:flex-row md:items-start md:gap-[4rem]"
      >
        <div className=" flex flex-1 flex-col items-center gap-5 text-center md:items-start md:gap-10 md:text-left">
          <p className=" leading-[1.8]">
            With a previous background experience in UI/UX design, I have now
            decided to expand my knowledge to become a Frontend Developer and I
            am looking for an internship. I am deeply passionate about my work
            while always eager to keep up to date with latest technologys within
            the industry. I am a fast learner and very goal orientated and with
            my background and knowledge I hope to become a great asset to your
            company.
          </p>

          <div className="item">
            <p className=" text-2xl font-bold">Mail</p>
            <span>hassan.creative@gmail.com</span>
          </div>
          <div className="item">
            <p className=" text-2xl font-bold">Phone</p>
            <span>+46 73-725 79 71</span>
          </div>
        </div>
        <div className=" relative w-full flex-1 px-0 pb-12 ">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            name="contact"
            method="post"
            className=" flex flex-col gap-5"
          >
            <div className="inputBox">
              <input
                type="text"
                name="name"
                // placeholder="Name"
                required
              />
              <span>Name</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                // placeholder="Email"
                required
              />
              <span>email</span>
            </div>
            <div className="inputBox">
              <textarea
                typeof="text"
                rows={7}
                // placeholder="Message"
                name="message"
                required
              />
              <span>message</span>
            </div>

            <div className="flex justify-between ">
              <button className=" button-primary max-w-[200px] cursor-pointer rounded-lg px-8 py-2 text-center text-white">
                Submit
              </button>

              {error && (
                <p className=" rounded-lg bg-red-700 px-4 py-2 text-white">
                  Error
                </p>
              )}
              {success && (
                <p className=" rounded-lg bg-green-700 px-4 py-2 text-white">
                  Email sent successfully
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
