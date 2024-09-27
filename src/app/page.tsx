"use client";

import { Link, Button } from "@nextui-org/react";
import img from "../assets/90x90.jpg";
import parkmates from "../assets/1.png";
import vttravel from "../assets/vt.gif";
import tricky from "../assets/trickyapp.gif";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
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
          />
          <div>
            <h1 className="text-lg font-mono">Hi👋, I'm Vincent</h1>
            <p className="navbar-brand font-mono font-extrabold text-2xl">
              Full Stack JavaScript Developer
            </p>
            <p className="navbar-brand font-mono text-lg mt-4">
              I'm a passionate web and mobile (React Native) developer with a
              knack for creating functional and visually appealing websites.
            </p>
            <div className="flex gap-2 mt-6">
              <Button className="btn btn-normal font-mono">Talk with me</Button>
              <Button variant="bordered" className="btn-outline font-mono">
                See my works
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="section-2">
        <div className="py-24">
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
          <div className="card-project w-11/12 lg:w-3/4 mx-auto flex flex-col md:flex-row mb-16">
            <div className="flex-1 flex justify-center items-center p-8 lg:p-12">
              <Image src={parkmates} alt="parkmates" />
            </div>
            <div className="flex-1 p-8 pt-0 xl:p-28 flex justify-center flex-col">
              <p className="font-mono font-bold text-3xl mb-2">ParkMates</p>
              <p className="font-mono text-lg mb-4">
                ParkMates is a mobile apps that help users to booking a parking
                spot in the targeted venue before goes to the venue. It'll help
                users to get easier way to find a parking spot.
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

          {/* VT-TRAVEL */}
          <div className="card-project w-11/12 lg:w-3/4 mx-auto flex flex-col md:flex-row mb-16">
            <div className="flex-1 flex justify-center items-center p-8 lg:p-12">
              <Image src={vttravel} alt="parkmates" unoptimized />
            </div>
            <div className="flex-1 p-8 pt-0 xl:p-28 flex justify-center flex-col">
              <p className="font-mono font-bold text-3xl mb-2">VT-TRAVEL</p>
              <p className="font-mono text-lg mb-4">
                VT-TRAVEL is a website that sold travel package around the
                world. It's use AI for comparing between 2 destinations that
                users pick. And use Midtrans service for payment gateway.
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
          {/* TrickyApp */}
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
                Tricky App is mobile based ecommerce app for brand tricky. Using
                React Native and Rest API to get and post data from the
                ecommerce web (Laravel). And using Midtrans services for payment
                gateway.
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
          <div className="flex justify-center items-center gap-2 text-center">
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
    </>
  );
}
