import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "@/store";

const Portfolio = () => {
  document.title =
    "Portfolio | Plurk – Tailwind CSS Multipurpose Landing Templates";
  const [activeTab, setActiveTab] = useState<string>("all");
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.direction) === "rtl"
      ? true
      : false;

  return (
    <div>
      <div>
        <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
          <div className="relative">
            <div className="container">
              <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                  <h6>Our Portfolio</h6>
                  <h4 className="!text-white">Some of my projects</h4>
                </div>
                <div
                  className="relative"
                  data-aos={isRtl ? "fade-right" : "fade-left"}
                  data-aos-duration="1000"
                >
                  <img
                    src="/assets/images/portfolio-logo.svg"
                    alt="Project Logo"
                    className="mx-auto rtl:rotate-y-180 md:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-12 pb-14 md:pb-[100px]">
          <div className="container">
            <div className="overflow-x-auto">
              <ul className="filters portfolio-filter mx-auto flex w-max gap-7 whitespace-nowrap pb-2.5 font-bold dark:text-white">
                <li className={`filter ${activeTab === "all" ? "active" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setActiveTab("all")}
                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                  >
                    All Work
                  </button>
                </li>
                <li
                  className={`filter ${activeTab === "design" ? "active" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab("design")}
                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                  >
                    Design
                  </button>
                </li>
                <li
                  className={`filter ${
                    activeTab === "website" ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab("website")}
                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                  >
                    Website
                  </button>
                </li>
                <li className={`filter ${activeTab === "app" ? "active" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setActiveTab("app")}
                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                  >
                    Mobile App
                  </button>
                </li>
                <li
                  className={`filter ${
                    activeTab === "application" ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab("application")}
                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                  >
                    Web Application
                  </button>
                </li>
                <li
                  className={`filter ${
                    activeTab === "ecommerce" ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab("ecommerce")}
                    className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                  >
                    Ecommerce
                  </button>
                </li>
              </ul>
            </div>
            <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "website"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-1.png"
                    alt="project-1"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Space Landing page
                    </h6>
                    <p>Website</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "app"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-2.png"
                    alt="project-2"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Crypto Game - UX Interface
                    </h6>
                    <p>Website, App</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "website"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-3.png"
                    alt="project-3"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Looking for a quiet place
                    </h6>
                    <p>Website</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "website"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-4.png"
                    alt="project-4"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      WeTour - Travel Hero Illustration
                    </h6>
                    <p>Website</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "design"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-5.png"
                    alt="project-5"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Digital Art Guide
                    </h6>
                    <p>Branding</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "design"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-6.png"
                    alt="project-6"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Frozeverse - 3D and motion design
                    </h6>
                    <p>Branding, Website, App</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "website"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-7.png"
                    alt="project-7"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Space Landing page
                    </h6>
                    <p>Website</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "app"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-8.png"
                    alt="project-8"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Crypto Game - UX Interface
                    </h6>
                    <p>Website, App</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "website"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-9.png"
                    alt="project-9"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Looking for a quiet place
                    </h6>
                    <p>Website</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "application"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-10.png"
                    alt="project-10"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      WeTour - Travel Hero Illustration
                    </h6>
                    <p>Website</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "design"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-11.png"
                    alt="project-11"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Digital Art Guide
                    </h6>
                    <p>Branding</p>
                  </div>
                </div>
              </div>
              <div
                className={`project ${
                  activeTab === "all" || activeTab === "ecommerce"
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                  <Link
                    to="/portfolio/show"
                    className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                  ></Link>
                  <img
                    src="/assets/images/project-12.png"
                    alt="project-12"
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      Frozeverse - 3D and motion design
                    </h6>
                    <p>Branding, Website, App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
