import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "@/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import ProjectSlider from "@/components/ProjectSlider";
import { useEffect, useState } from "react";

const PersonalPortfolio = () => {
  document.title = "Personal Portfolio | Tito Candra Pratama";
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.direction) === "rtl"
      ? true
      : false;

  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/676ab6bce41b4d34e46a8280",
        {
          headers: {
            "X-Master-Key": import.meta.env.VITE_MASTER_KEY,
            "X-Access-Key": import.meta.env.VITE_ACCESS_KEY,
            "X-Bin-Meta": "false",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error when get the data");
      }

      const json = await response.json();
      setProjects(json.projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-black pt-[82px] lg:overflow-hidden lg:pt-[106px]">
        <div className="bg-[url(/assets/images/overlay-noise.png)] bg-cover bg-no-repeat pt-14 lg:pt-20">
          <div className="container">
            <div className="relative">
              <div className="text-center lg:w-2/3 lg:ltr:text-left mb-16 lg:rtl:text-right">
                <div className="mx-auto mb-5 flex h-[100px] max-w-[255px] items-center lg:float-left lg:mr-7 lg:mb-0">
                  <img
                    src="/assets/images/personal-portfolio/website-apps.png"
                    alt=""
                    className="w-full"
                  />
                </div>
                <h2 className="relative text-2xl font-black text-white sm:text-3xl lg:text-[80px] lg:leading-[100px] z-30">
                  Hello Friend, I am Tito Software Engineer
                </h2>
              </div>
              <div className="absolute bottom-0 hidden w-2/5 ltr:-right-20 rtl:-left-20 rtl:rotate-y-180 lg:block">
                <img
                  src="/assets/images/personal-portfolio/avatar-01.png"
                  alt=""
                  className="w-full rounded-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="overflow-x-hidden bg-white py-14 dark:bg-gray-dark">
        <div className="container">
          <div className="items-center lg:flex">
            <h2 className="flex-none border-gray/20 text-center text-xl font-black uppercase text-black dark:text-white lg:ltr:mr-12 lg:ltr:border-r-[3px] lg:ltr:pr-12 lg:ltr:text-left lg:rtl:ml-12 lg:rtl:border-l-[3px] lg:rtl:pl-12 lg:rtl:text-right">
              MY WORKPLACE
            </h2>
            <Swiper
              className="mt-10 flex-1 lg:mt-0 xl:w-[1200px] xl:flex-none"
              loop={true}
              slidesPerView="auto"
              spaceBetween={10}
              speed={4000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1.7,
                },
                600: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
                1142: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay]}
              dir={isRtl ? "rtl" : "ltr"}
              key={isRtl ? "true" : "false"}
            >
              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/fuboru-indonesia.png"
                    alt=" Fuboru Indonesia"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    src="/assets/images/widaya-inti-plasma.png"
                    alt="Widaya Inti Plasma"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-t from-white/50 to-transparent py-14 dark:bg-none md:py-20">
        <div className="container">
          <div className="grid items-center gap-y-16 gap-x-8 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/assets/images/personal-portfolio/women.jpg"
                alt=""
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="mb-2">
                <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                  <span className="text-primary">/</span> About ME
                </h6>
                <h2 className="text-3xl font-black leading-normal text-black dark:text-white md:text-[40px]">
                  I Coding Since 2013
                </h2>
              </div>
              <p className="text-lg font-medium text-justify">
                Hello my name is
                <span className="font-bold">Tito Candra Pratama</span>, I am a
                work at Fuboru Indonesia as a software engineer I have passion
                in several programming languages especially Javascript, PHP,
                Python. I also have several web-based projects on Javascript and
                I am actively following the development of Javascript Frameworks
                like <span className="font-bold">Vue</span>,{" "}
                <span className="font-bold">React</span>,{" "}
                <span className="font-bold">Svelte</span> and{" "}
                <span className="font-bold">Angular</span>, One of my projects
                is the website you are visiting today. this website using React
                and Tailwind as CSS Framework.
              </p>
              <div className="my-6 grid gap-4 text-lg font-bold text-black dark:text-white sm:mt-12 sm:mb-8 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-4xl font-black text-primary md:text-7xl">
                    4+
                  </h2>
                  <p>Years of experience</p>
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="text-4xl font-black text-secondary md:text-7xl">
                    50+
                  </h2>
                  <p>Github projects</p>
                </div>
              </div>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-14 dark:bg-gray-dark md:py-20">
        <div className="container">
          <div className="grid rounded-[10px] border-[2px] border-secondary/20 text-center font-semibold text-black dark:text-white sm:grid-cols-2 sm:ltr:text-left sm:rtl:text-right lg:text-xl">
            <div className="px-5 py-8 md:py-10 md:px-12">
              <div className="mb-4 text-[40px] font-extrabold text-primary">
                <CountUp start={0} end={4} duration={10} suffix="+"></CountUp>
              </div>
              <h6>Years of experience</h6>
            </div>
            <div className="px-5 py-8 md:py-10 md:px-12">
              <div className="mb-4 text-[40px] font-extrabold text-primary">
                <CountUp start={0} end={10} duration={10} suffix="+"></CountUp>
              </div>
              <h6>Projects complete</h6>
            </div>
          </div>
        </div>
      </section>

      <ProjectSlider
        title1="Our Project"
        title2="Some of our work."
        projects={projects}
      />

      <section className="bg-black py-10 md:py-0">
        <div className="container">
          <div className="grid items-center md:grid-cols-2">
            <div className="py-5">
              <div className="text-center md:ltr:text-left md:rtl:text-right lg:w-3/4">
                <div className="mb-10">
                  <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                    <span className="text-primary">/</span> get started
                  </h6>
                  <h2 className="text-3xl font-black leading-tight text-white md:text-[40px]">
                    We Help Companies Move Faster
                  </h2>
                </div>
                <div className="mt-8">
                  <Link
                    to="#"
                    className="bg-secondary py-3 px-5 font-bold text-white transition hover:bg-primary"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 pr-4 md:pr-12">
              <img
                src="/assets/images/personal-portfolio/contact-email.png"
                alt=""
                data-aos="fade-down"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalPortfolio;
