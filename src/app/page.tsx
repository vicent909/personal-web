"use client";

import { Link, Button, Input, Textarea, Spinner } from "@nextui-org/react";
import img from "../assets/90x90.jpg";
import parkmates from "../assets/1.png";
import vttravel from "../assets/vt.gif";
import tricky from "../assets/trickyapp.gif";
import undira from "../assets/979UNDIRA.png";
import logo_undira from "../assets/logo_undira.png";
import hacktiv from "../assets/hacktiv.png";
import logo_hacktiv from "../assets/hacktiv_logo.png";
import purba from "../assets/purba.gif";
import success from "../assets/success.gif";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import sendEmail from "@/components/email";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file

export default function Home() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [isSend, setIsSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (contact.email === "") return false;

    return validateEmail(contact.email) ? false : true;
  }, [contact.email]);

  const emailHandler = async () => {
    setLoading(true);
    await sendEmail(contact);
    setIsSend(true);

    setTimeout(() => {
      setLoading(false);
      setContact({
        name: "",
        email: "",
        msg: "",
      });
      setIsSend(false);
    }, 2500);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration to 1 second
      easing: "ease-in-out", // Add easing effect
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <section className="w-3/4 mx-auto">
        <div className="py-8 sm:py-32 flex flex-col lg:flex-row home-container items-center lg:justify-center gap-8">
          <Image
            src={img}
            width={400}
            height={400}
            alt="image"
            className="image-home"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h1 className="text-lg font-mono">Hi👋, I&apos;m Vincent</h1>
            <p className="navbar-brand font-mono font-extrabold text-2xl">
              Full Stack JavaScript Developer
            </p>
            <p className="navbar-brand font-mono text-lg mt-4">
              I&apos;m a passionate web and mobile (React Native) developer with
              a knack for creating functional and visually appealing websites.
            </p>
            <div className="flex gap-2 mt-6">
              <Link href="/#contact">
                <Button className="btn btn-normal font-mono">
                  Talk with me
                </Button>
              </Link>
              <Link href="/#projects">
                <Button variant="bordered" className="btn-outline font-mono">
                  See my works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="section-2">
        <div className="py-24" data-aos="fade">
          <p className="text-center text-3xl font-mono font-bold text-secondary mb-8">
            Recent Projects
          </p>
          {/* <div className="w-3/4 mx-auto flex flex-col gap-4 pt-4">  
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="javascript"
                width={100}
                height={100}
                className="rounded-xl  grayscale hover:grayscale-0"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                alt="typescript"
                width={100}
                height={100}
                className="rounded-xl  grayscale hover:grayscale-0"
              />
              <img
                src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg"
                alt="html"
                width={100}
                height={100}
                className="rounded-xl  grayscale hover:grayscale-0"
              />
              <img
                src="https://logospng.org/download/css-3/logo-css-3-2048.png"
                alt="css"
                width={100}
                height={100}
                className="rounded-xl  grayscale hover:grayscale-0"
              />
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
                alt="reactjs"
                width={100}
                height={100}
                className="rounded-xl grayscale hover:grayscale-0"
              />
              <img
                src="https://cdn.freelogovectors.net/wp-content/uploads/2021/01/graphql-logo-freelogovectors.net_.png"
                alt="graphql"
                width={100}
                height={100}
                className="rounded-xl grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <img
                src="https://seekvectors.com/files/download/234b110fb32958f68f318e13c7a0610e.png"
                alt="express"
                width={140}
                height={100}
                className="rounded-xl  grayscale hover:grayscale-0"
              />
              <img
                src="https://luminfire.com/wp-content/uploads/2017/12/React_Native_Logo-1024x194.png"
                alt="reactnative"
                width={140}
                height={100}
                className="rounded-xl  grayscale hover:grayscale-0"
              />
              <img
                src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png"
                alt="nextjs"
                width={140}
                height={100}
                className="rounded-xl  grayscale hover:grayscale-0"
              />
              <img
                src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/mongodb-logo-freelogovectors.net_.png"
                alt="mongodb"
                width={150}
                height={100}
                className="rounded-xl  grayscale hover:grayscale-0"
              />
              <img
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/postgresql_logo_icon_170836.png"
                alt="postgres"
                width={140}
                height={100}
                className="rounded-xl  grayscale hover:grayscale-0"
              />
            </div>
          </div> */}
          {/* parkmates */}
          <div data-aos="fade-up">
            <div className="card-project w-11/12 lg:w-3/4 mx-auto flex flex-col md:flex-row mb-16">
              <div className="flex-1 flex justify-center items-center p-8 lg:p-12">
                <Image src={parkmates} alt="parkmates" />
              </div>
              <div className="flex-1 p-8 pt-0 xl:p-28 flex justify-center flex-col">
                <p className="font-mono font-bold text-3xl mb-2">ParkMates</p>
                <p className="font-mono text-lg mb-4">
                  ParkMates is a mobile apps that help users to booking a
                  parking spot in the targeted venue before goes to the venue.
                  It&apos;ll help users to get easier way to find a parking
                  spot.
                </p>
                <p className="font-mono text-sm font-light">
                  tech: NEXT.js, React Native, etc.
                </p>
                <Link
                  className="cursor-pointer mt-4 w-fit"
                  href="https://github.com/Parkmates/mobile.git"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                    height={38}
                    width={38}
                    className="rounded-lg"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* VT-TRAVEL */}
          <div data-aos="fade-up">
            <div className="card-project w-11/12 lg:w-3/4 mx-auto flex flex-col md:flex-row mb-16 ">
              <div className="flex-1 flex justify-center items-center p-8 lg:p-12">
                <Image src={vttravel} alt="parkmates" unoptimized />
              </div>
              <div className="flex-1 p-8 pt-0 md:py-12 xl:p-28 flex justify-center flex-col">
                <p className="font-mono font-bold text-3xl mb-2">VT-TRAVEL</p>
                <p className="font-mono text-lg mb-4">
                  VT-TRAVEL is a website that sold travel package around the
                  world. It&apos;s use AI for comparing between 2 destinations
                  that users pick. And use Midtrans service for payment gateway.
                </p>
                <p className="font-mono text-sm font-light">
                  tech: Express.js, React.js, etc.
                </p>
                <Link
                  className="cursor-pointer mt-4 w-fit"
                  href="https://github.com/vicent909/VT-TRAVEL.git"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                    height={38}
                    width={38}
                    className="rounded-lg"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* TrickyApp */}
          <div data-aos="fade-up">
            <div className="card-project w-11/12 lg:w-3/4 mx-auto flex flex-col md:flex-row mb-16">
              <div className="cursor" style={{}}></div>
              <div className="flex-1 flex justify-center items-center p-8 lg:p-12">
                <Image
                  src={tricky}
                  alt="parkmates"
                  unoptimized
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1 p-8 pt-0 xl:p-28 flex justify-center flex-col">
                <p className="font-mono font-bold text-3xl mb-2">Tricky App</p>
                <p className="font-mono text-lg mb-4">
                  Tricky App is mobile based ecommerce app for brand tricky.
                  Using React Native and Rest API to get and post data from the
                  ecommerce web (Laravel). And using Midtrans services for
                  payment gateway.
                </p>
                <p className="font-mono text-sm font-light">
                  tech: React Native, Laravel etc.
                </p>
                <Link
                  className="cursor-pointer mt-4 w-fit"
                  href="https://github.com/vicent909/trickyApp.git"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                    height={38}
                    width={38}
                    className="rounded-lg"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex justify-center items-center gap-2 text-center"
          >
            <Link
              className="other-projects gap-2 cursor-pointer font-mono"
              href="https://github.com/vicent909"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                height={38}
                width={38}
                className="rounded-lg bg-white"
              />
              Other Projects
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>
      <section id="about" className="section-about py-24 px-8 sm:px-24">
        <p
          className="font-mono text-3xl text-center font-bold"
          data-aos="fade-up"
        >
          About Me
        </p>
        <div
          className="flex flex-col lg:flex-row mt-8 gap-4 h-fit"
          data-aos="fade-up"
        >
          {/* <div className="flex-1 p-8 text-center div-about h-fit">
            <p className="font-mono font-bold text-xl text-primary mb-4">
              Bachelor&apos;s Degree
            </p>
            <Image
              src={undira}
              alt="undira"
              className="hidden sm:flex image-about px-8 mb-8"
            />
            <Image
              src={logo_undira}
              alt="undira"
              className="sm:hidden image-about px-8 mb-8"
            />
            <p className="font-mono text-lg mb-2">
              I&apos;m a Informatics Engineering graduate from Dian Nusantara
              University with Cumlaude predicate.
            </p>
            <p className="font-mono text-lg mb-4">GPA (3.84 / 4.00)</p>
            <div className="flex justify-center my-2">
              <div className="bg-gray-400 w-3/4 h-0.5"></div>
            </div>
            <p className="font-mono font-bold text-xl mb-4">Bootcamp</p>
            <Image
              src={hacktiv}
              alt="hacktiv"
              className="hidden sm:flex image-about px-8 mb-8"
            />
            <Image
              src={logo_hacktiv}
              alt="hacktiv"
              className="sm:hidden image-about px-8 mb-8 "
            />
            <p className="font-mono text-lg mb-2">
              I&apos;m graduates from Hacktiv8 Bootcamp Full Stack JavaScript
              Immersive Program with Honor&apos;s Award.
            </p>
            <p className="font-mono text-lg mb-4">Score (97.48 / 100)</p>
          </div>
          <div className="flex-1 about-primary p-8 text-center div-about">
            <p className="font-mono font-bold text-xl text-secondary mb-4">
              Bootcamp
            </p>
            <Image
              src={hacktiv}
              alt="hacktiv"
              className="hidden sm:flex image-about px-8 mb-8"
            />
            <Image
              src={logo_hacktiv}
              alt="hacktiv"
              className="sm:hidden image-about px-8 mb-8 "
            />
            <p className="font-mono text-lg mb-2 text-secondary">
              I&apos;m graduates from Hacktiv8 Bootcamp Full Stack JavaScript
              Immersive Program with Honor&apos;s Award.
            </p>
            <p className="font-mono text-lg mb-4 text-secondary">
              Score (97.48 / 100)
            </p>
          </div>
          <div className="flex-1 p-8 text-center div-about">a</div> */}
          {/* 2 */}
          <div className="flex-1 p-8 text-center div-about h-fit">
            <p className="font-mono font-bold text-xl text-primary mb-4">
              Bachelor&apos;s Degree
            </p>
            <Image
              src={undira}
              alt="undira"
              className="hidden sm:flex image-about px-8 mb-8"
            />
            <Image
              src={logo_undira}
              alt="undira"
              className="sm:hidden image-about px-8 mb-8"
            />
            <p className="font-mono text-lg mb-2">
              I&apos;m a Informatics Engineering graduate from Dian Nusantara
              University with Cumlaude predicate.
            </p>
            <p className="font-mono text-lg">GPA (3.84 / 4.00)</p>
          </div>

          {/* <div className="bg-gray-400 w-0.5 lg:my-24"></div> */}

          <div className="flex-1 p-8 div-about about-primary">
            <p className="font-mono font-bold text-xl mb-4 text-center text-secondary">
              Work Experience
            </p>
            <div>
              <p className="font-mono text-xl font-extrabold text-secondary">
                *Apr 2019 - May 2024
              </p>
              <div className="flex items-center gap-4">
                <div className="flex w-12 h-12 rounded-md justify-center items-center div-secondary">
                  <p className="font-bold text-lg font-mono text-primary ">F</p>
                </div>
                <div>
                  <p className="font-mono text-lg text-secondary">
                    Fashion Lala (Online Shop)
                  </p>
                  <p className="font-mono text-md text-secondary">Owner</p>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div>
              <p className="font-mono text-xl font-extrabold text-secondary">
                *Mar 2018 - Mar 2019
              </p>
              <div className="flex items-center gap-4">
                <div className="flex w-12 h-12 rounded-md justify-center items-center div-primary div-secondary">
                  <p className="font-bold text-lg font-mono text-primary">E</p>
                </div>
                <div>
                  <p className="font-mono text-lg text-secondary">
                    PT. Elang Mas Mitra Perkasa
                  </p>
                  <p className="font-mono text-md text-secondary">
                    Head Of Branch Administration
                  </p>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div>
              <p className="font-mono text-xl font-extrabold text-secondary">
                *Dec 2017 - Mar 2018
              </p>
              <div className="flex items-center gap-4">
                <div className="flex w-12 h-12 rounded-md justify-center items-center div-secondary">
                  <p className="font-bold text-lg font-mono text-primary">E</p>
                </div>
                <div>
                  <p className="font-mono text-lg text-secondary">
                    PT. Elang Mas Mitra Perkasa
                  </p>
                  <p className="font-mono text-md text-secondary">
                    Exhibition Project Staff
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-gray-400 w-0.5 lg:my-24"></div> */}

          <div className="flex-1 p-8 text-center div-about h-fit">
            <p className="font-mono font-bold text-xl mb-4">Bootcamp</p>
            <Image
              src={hacktiv}
              alt="hacktiv"
              className="hidden sm:flex image-about px-8 mb-8"
            />
            <Image
              src={logo_hacktiv}
              alt="hacktiv"
              className="sm:hidden image-about px-8 mb-8 "
            />
            <p className="font-mono text-lg mb-2">
              I&apos;m graduates from Hacktiv8 Bootcamp Full Stack JavaScript
              Immersive Program with Honor&apos;s Award.
            </p>
            <p className="font-mono text-lg">Score (97.48 / 100)</p>
          </div>
        </div>
        <div
          className="flex justify-center items-center gap-2 text-center mt-8"
          data-aos="fade-up"
        >
          <a
            className="flex items-center other-projects-secondary gap-2 cursor-pointer font-mono"
            href="/cv.pdf"
            download={"Vincent - Full Stack Developer"}
          >
            <FaFileDownload size={28} />
            Download CV
            {/* <FaChevronRight /> */}
          </a>
        </div>
      </section>
      <section id="contact" className="section-2 py-24">
        <div className="w-11/12 lg:w-3/4 mx-auto flex flex-col-reverse md:flex-row gap-8">
          <div className="flex-1" data-aos="fade-right">
            <div
              className={
                isSend
                  ? "flex-1 div-secondary rounded-lg p-8 sm:p-10 card-contact flipped"
                  : "flex-1 div-secondary rounded-lg p-8 sm:p-10 card-contact"
              }
            >
              <div className="front">
                <p className="font-mono text-3xl font-bold text-primary mb-8">
                  Contact Me
                </p>
                <form action={emailHandler} className="flex flex-col gap-4">
                  <label htmlFor="name">
                    <p className="font-mono ">Your Name</p>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      label="Name"
                      value={contact.name}
                      variant="bordered"
                      onChange={(e) => inputHandler(e)}
                      classNames={{
                        base: "w-full",
                        input: "font-mono div-primary",
                        label: "font-mono",
                      }}
                    />
                  </label>
                  <label htmlFor="email">
                    <p className="font-mono ">Your Email</p>
                    <Input
                      name="email"
                      type="email"
                      label="Email"
                      variant="bordered"
                      value={contact.email}
                      isInvalid={isInvalid}
                      errorMessage="Please enter a valid email"
                      onChange={(e) => inputHandler(e)}
                      classNames={{
                        base: "w-full",
                        input: "font-mono",
                        label: "font-mono",
                      }}
                    />
                  </label>
                  <label htmlFor="message">
                    <p className="font-mono ">Your Message</p>
                    <Textarea
                      label="Message"
                      variant="bordered"
                      // placeholder="Enter your description"
                      // disableAnimation
                      // disableAutosize
                      value={contact.msg}
                      name="msg"
                      id="msg"
                      onChange={(e) => inputHandler(e)}
                      classNames={{
                        base: "w-full",
                        input: "resize-y min-h-[80px] font-mono",
                        label: "font-mono",
                      }}
                    />
                  </label>
                  {(contact.name === "" ||
                    contact.email === "" ||
                    contact.msg === "") && (
                    <p className="font-mono text-red-500 text-xs">
                      Name, Email, and Message is required
                    </p>
                  )}
                  <Button
                    className="btn btn-normal font-mono disabled:bg-slate-200 disabled:text-black"
                    disabled={
                      contact.name !== "" &&
                      contact.email !== "" &&
                      contact.msg !== ""
                        ? false
                        : true
                    }
                    type="submit"
                  >
                    {loading && <Spinner size="sm" color="default" />}
                    Send
                  </Button>
                </form>
              </div>
              <div className="back">
                <Image
                  src={success}
                  alt="success"
                  className="w-2/6 mb-2"
                  unoptimized
                />
                <p className="font-mono font-bold text-2xl">Sent!</p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 flex justify-center items-center"
            data-aos="fade-left"
          >
            <Image src={purba} alt="email" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
