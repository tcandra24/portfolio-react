import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";

import "swiper/css";
import "swiper/css/navigation";

interface Projects {
  id: number;
  name: string;
  tags: Array<string>;
}

interface Props {
  title1: string;
  title2: string;
  projects: Array<Projects>;
}

const ProjectSlider = (props: Props) => {
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.direction) === "rtl"
      ? true
      : false;

  return (
    <section className="py-14 lg:py-[100px]">
      <div className="container">
        <div className="mb-7 flex flex-col items-center justify-center lg:mb-0 lg:flex-row lg:justify-between">
          <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
            <h6>{props.title1}</h6>
            <h4>{props.title2}</h4>
          </div>
          <div className="flex items-center justify-end gap-4">
            <Link
              to="/portfolio"
              className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
            >
              View All
            </Link>
            <div>
              <button
                type="button"
                className="project-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
              >
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black rtl:rotate-180 dark:text-white"
                >
                  <path
                    d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="project-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
              >
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black rtl:rotate-180 dark:text-white"
                >
                  <path
                    d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper project-slider px-6">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".project-slider-button-next",
              prevEl: ".project-slider-button-prev",
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            dir={isRtl ? "rtl" : "ltr"}
            key={isRtl ? "true" : "false"}
          >
            {props.projects &&
              props.projects.map((project: Projects) => (
                <SwiperSlide>
                  <div
                    className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark"
                    key={project.id}
                  >
                    <Link
                      to={`/portfolio/show/${project.id}`}
                      className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                    ></Link>
                    <img
                      src={`https://ui-avatars.com/api/?name=${project.name}&background=random`}
                      alt={project.name}
                      className="h-52 w-full rounded-t-3xl object-cover"
                    />
                    <div className="p-5 text-sm font-bold">
                      <h6 className="mb-1 text-black line-clamp-1 dark:text-white">
                        {project.name}
                      </h6>
                      <div className="flex flex-row gap-2">
                        {project.tags &&
                          project.tags.map((tag: string) => (
                            <>
                              <div className="badge badge-info gap-2 text-base text-white">
                                {tag}
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
