import CountUp from "react-countup";
import ClientSlider from "@/components/ClientSlider";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "@/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const PersonalPortfolio = () => {
  document.title = "Personal Portfolio | Tito Candra Pratama";
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.direction) === "rtl"
      ? true
      : false;

  const feedbacks = [
    {
      id: 1,
      name: "amelia smith",
      role: "Founder of Alpha Design",
      thumbnail: "/assets/images/personal-portfolio/customer-avatar.svg",
      message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ];

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
                <h2 className="relative text-3xl font-black text-white sm:text-5xl lg:text-[80px] lg:leading-[100px] z-30">
                  I make beautiful web site and apps!
                  <svg
                    width="59"
                    height="107"
                    viewBox="0 0 59 107"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-5 ltr:-left-8 rtl:-right-8 rtl:rotate-y-180"
                  >
                    <path
                      opacity="0.1"
                      d="M2.99181 104.456C0.123358 63.6362 48.4681 6.12462 55.7077 39.4953C60.866 63.2729 24.484 67.2303 15.4891 1.9999"
                      stroke="url(#paint0_linear_1479_14247)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1479_14247"
                        x1="17"
                        y1="113"
                        x2="17"
                        y2="2"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </h2>
              </div>
              <div className="absolute bottom-0 hidden w-3/4 ltr:-right-20 rtl:-left-20 rtl:rotate-y-180 lg:block">
                <img
                  src="/assets/images/personal-portfolio/women-banner.png"
                  alt=""
                  className="w-full"
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
              PREVIOUSLY WORKED ON
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
                  <img src="/assets/images/logo-1.svg" alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img src="/assets/images/logo-2.svg" alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img src="/assets/images/logo-3.svg" alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img src="/assets/images/logo-4.svg" alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img src="/assets/images/logo-5.svg" alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img src="/assets/images/logo-6.svg" alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img src="/assets/images/logo-7.svg" alt="" />
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
                src="/assets/images/personal-portfolio/about-block.png"
                alt=""
                className="absolute top-8 hidden ltr:-left-16 rtl:-right-16 dark:hidden md:block"
                data-aos="fade-right"
                data-aos-duration="1000"
              />
              <img
                src="/assets/images/personal-portfolio/about-block-dark.png"
                alt=""
                className="absolute top-8 hidden ltr:-left-16 rtl:-right-16 dark:hidden dark:md:block"
                data-aos="fade-right"
                data-aos-duration="1000"
              />
              <img
                src="/assets/images/personal-portfolio/women.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
              <img
                src="/assets/images/personal-portfolio/man-about.png"
                alt=""
                className="absolute -bottom-10 ltr:-left-10 rtl:-right-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div>
              <div className="mb-2">
                <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                  <span className="text-primary">/</span> About ME
                </h6>
                <h2 className="text-3xl font-black leading-normal text-black dark:text-white md:text-[40px]">
                  I’ve been designing websites since 2010
                </h2>
              </div>
              <p className="text-lg font-medium">
                Excerpter sent occaecat cuspidate non provident, sent in culpa
                qui official deferent mullet anima id est labarum acute inure
                dolor reprehenderit in voluptate velit esse chillum dolore eu
                fugit.
              </p>
              <div className="my-6 grid gap-4 text-lg font-bold text-black dark:text-white sm:mt-12 sm:mb-8 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-4xl font-black text-primary md:text-7xl">
                    12
                  </h2>
                  <p>Years of experience</p>
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="text-4xl font-black text-secondary md:text-7xl">
                    150
                  </h2>
                  <p>Successful projects</p>
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
          <div className="grid rounded-[10px] border-[2px] border-secondary/20 text-center font-semibold text-black dark:text-white sm:grid-cols-3 sm:ltr:text-left sm:rtl:text-right lg:text-xl">
            <div className="px-5 py-8 md:py-10 md:px-12">
              <div className="mb-4 text-[40px] font-extrabold text-primary">
                <CountUp start={0} end={5} duration={10} suffix="+"></CountUp>
              </div>
              <h6>Years of experience</h6>
            </div>
            <div className="bg-secondary/10 px-5 py-8 md:py-10 md:px-12">
              <div className="mb-4 text-[40px] font-extrabold text-secondary">
                <CountUp start={0} end={99} duration={10} suffix="+"></CountUp>
              </div>
              <h6>Client Satisfied</h6>
            </div>
            <div className="px-5 py-8 md:py-10 md:px-12">
              <div className="mb-4 text-[40px] font-extrabold text-primary">
                <CountUp start={0} end={255} duration={10} suffix="+"></CountUp>
              </div>
              <h6>Projects complete</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] md:py-20">
        <div className="container">
          <div className="mb-10">
            <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
              <span className="text-primary">/</span> services
            </h6>
            <h2 className="text-3xl font-black leading-tight text-black dark:text-white md:text-[40px]">
              My extensive list of skills
            </h2>
          </div>
          <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                <Link to="#" className="absolute inset-0 h-full w-full"></Link>
                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                  <img
                    src="/assets/images/personal-portfolio/ui-ux-icon.svg"
                    alt=""
                  />
                </div>
                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">
                  UI/UX Design
                </h5>
                <p className="text-lg leading-loose line-clamp-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                <Link to="#" className="absolute inset-0 h-full w-full"></Link>
                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                  <img
                    src="/assets/images/personal-portfolio/product-icon.svg"
                    alt=""
                  />
                </div>
                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">
                  Product Design
                </h5>
                <p className="text-lg leading-loose line-clamp-3">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                <Link to="#" className="absolute inset-0 h-full w-full"></Link>
                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                  <img
                    src="/assets/images/personal-portfolio/graphic-icon.svg"
                    alt=""
                  />
                </div>
                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">
                  Motion Graphics
                </h5>
                <p className="text-lg leading-loose line-clamp-3">
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                <Link to="#" className="absolute inset-0 h-full w-full"></Link>
                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                  <img
                    src="/assets/images/personal-portfolio/web-design-icon.svg"
                    alt=""
                  />
                </div>
                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">
                  Web Design
                </h5>
                <p className="text-lg leading-loose line-clamp-3">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                <Link to="#" className="absolute inset-0 h-full w-full"></Link>
                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                  <img
                    src="/assets/images/personal-portfolio/research-icon.svg"
                    alt=""
                  />
                </div>
                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">
                  User Research
                </h5>
                <p className="text-lg leading-loose line-clamp-3">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  chunks as necessary
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                <Link to="#" className="absolute inset-0 h-full w-full"></Link>
                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                  <img
                    src="/assets/images/personal-portfolio/app-development-icon.svg"
                    alt=""
                  />
                </div>
                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">
                  App Development
                </h5>
                <p className="text-lg leading-loose line-clamp-3">
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-t from-white/50 to-transparent py-16 dark:from-white/[0.02]">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="text-center text-lg font-medium md:ltr:text-left md:rtl:text-right">
              <h2 className="mb-3 text-3xl font-black leading-normal text-black dark:text-white md:text-[40px]">
                Making Complex Digital Products
              </h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a text commonly
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content.
              </p>
              <div className="mt-8">
                <Link
                  to="#"
                  className="bg-secondary py-3 px-5 font-bold text-white transition hover:bg-primary"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/assets/images/personal-portfolio/digital-product.png"
                alt=""
                className="h-full w-full object-cover rtl:rotate-y-180"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </section>

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
