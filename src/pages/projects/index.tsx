import ProjectSlider from "@/components/ProjectSlider";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { useState, useEffect } from "react";

const Services = () => {
  document.title =
    "Services | Plurk – Tailwind CSS Multipurpose Landing Templates";
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
    <div>
      <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
        <div className="relative">
          <div className="container">
            <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
              <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                <h6>My Projects</h6>
                <h4 className="!text-white">In a Nutshell</h4>
              </div>
              <div
                className="relative mt-6 md:mt-0"
                data-aos={isRtl ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
              >
                <img
                  src="/assets/images/projects-logo.svg"
                  alt="Project Logo"
                  className="mx-auto rtl:rotate-y-180 md:mx-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-t from-white/[55%] to-transparent py-14 dark:bg-none lg:py-[100px]">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group rounded-3xl border-2 border-white bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary shadow-[0px_15px_30px_rgba(180,118,229,0.4)] transition group-hover:bg-black">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M10.1658 20C10.5862 20 10.9617 19.7371 11.1054 19.342L15.8374 6.34204C16.0749 5.68981 15.5919 5 14.8978 5H13.8341C13.4137 5 13.0382 5.26292 12.8945 5.65796L8.16245 18.658C7.92504 19.3102 8.40804 20 9.10214 20H10.1658Z"
                      fill="white"
                    ></path>
                    <path
                      d="M17.9889 17.0964C18.3794 17.4871 19.0127 17.4873 19.4034 17.0966L23.2929 13.2071C23.6834 12.8166 23.6834 12.1834 23.2929 11.7929L19.4036 7.90359C19.0129 7.51287 18.3793 7.5131 17.9889 7.90409L17.2814 8.61254C16.8913 9.00328 16.8916 9.63632 17.2823 10.0266L19.0501 11.7927C19.441 12.1832 19.441 12.8168 19.0502 13.2074L17.2822 14.9746C16.8916 15.365 16.8914 15.9981 17.2818 16.3888L17.9889 17.0964ZM4.94994 13.2073C4.55904 12.8167 4.55896 12.1832 4.94977 11.7925L6.71781 10.0253C7.10839 9.63494 7.10858 9.00184 6.71823 8.61121L6.01111 7.90359C5.62062 7.51283 4.98726 7.51272 4.59664 7.90334L0.707106 11.7929C0.316582 12.1834 0.316582 12.8166 0.707107 13.2071L4.59639 17.0964C4.98711 17.4871 5.62066 17.4869 6.01111 17.0959L6.71856 16.3874C7.10874 15.9967 7.10837 15.3637 6.71773 14.9734L4.94994 13.2073Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <Link
                  to="/portfolio"
                  className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                >
                  Full Stack
                </Link>
                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black text-justify">
                  Full Stack has become my expertise with JavaScript and PHP
                  being the programming languages.
                </p>
                <Link
                  to="/portfolio"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black dark:bg-gray-dark"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                  >
                    <path
                      d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group rounded-3xl border-2 border-white bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary shadow-[0px_15px_30px_rgba(180,118,229,0.4)] transition group-hover:bg-black">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                    fill="none"
                  >
                    <path d="M20.477,2l-4.5,8h-9l4.5-8h9" fill="white" />
                    <path d="M11.52,30l4.5-8h9l-4.5,8h-9" fill="white" />
                    <path d="M15.975,10h9l-4.5-8h-9Z" fill="white" />
                    <path d="M16.022,22h-9l4.5,8h9Z" fill="white" />
                    <path d="M11.477,18l4.5-8-4.5-8-4.5,8Z" fill="white" />
                    <path d="M20.52,14l-4.5,8,4.5,8,4.5-8Z" fill="white" />
                  </svg>
                </div>
                <Link
                  to="/portfolio"
                  className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                >
                  Web 3
                </Link>
                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black text-justify">
                  Web 3 also caught my attention and I started to explore web 3
                  with solidity.
                </p>
                <Link
                  to="/portfolio"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black dark:bg-gray-dark"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                  >
                    <path
                      d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group rounded-3xl border-2 border-white bg-white p-6 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary shadow-[0px_15px_30px_rgba(180,118,229,0.4)] transition group-hover:bg-black">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.302 21.6149C11.5234 21.744 11.6341 21.8086 11.7903 21.8421C11.9116 21.8681 12.0884 21.8681 12.2097 21.8421C12.3659 21.8086 12.4766 21.744 12.698 21.6149C14.646 20.4784 20 16.9084 20 12V6.6C20 6.04207 20 5.7631 19.8926 5.55048C19.7974 5.36198 19.6487 5.21152 19.4613 5.11409C19.25 5.00419 18.9663 5.00084 18.3988 4.99413C15.4272 4.95899 13.7136 4.71361 12 3C10.2864 4.71361 8.57279 4.95899 5.6012 4.99413C5.03373 5.00084 4.74999 5.00419 4.53865 5.11409C4.35129 5.21152 4.20259 5.36198 4.10739 5.55048C4 5.7631 4 6.04207 4 6.6V12C4 16.9084 9.35396 20.4784 11.302 21.6149Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="white"
                    />
                  </svg>
                </div>
                <Link
                  to="/portfolio"
                  className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                >
                  Security
                </Link>
                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black text-justify">
                  Security becomes very important when it comes to web
                  technology.
                </p>
                <Link
                  to="/portfolio"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black dark:bg-gray-dark"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                  >
                    <path
                      d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectSlider
        title1="Our Project"
        title2="Some of our work."
        projects={projects}
      />

      <section className="bg-white/50 py-14 dark:bg-transparent lg:py-[100px]">
        <div className="container">
          <div className="heading text-center">
            <h4>What Technologies Do We Use?</h4>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#DF2E31] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:hidden"
                >
                  <path
                    d="M2 9.94476L29.9114 0L58.5745 9.76794L53.9335 46.6961L29.9114 60L6.26521 46.8729L2 9.94476Z"
                    fill="currentColor"
                  />
                  <path
                    d="M29.9555 7.00586L12.5635 45.702L19.0606 45.5915L22.5524 36.8621H38.1545L41.9778 45.702L48.1876 45.8125L29.9555 7.00586ZM29.9999 19.4037L35.8782 31.6908H24.8284L29.9999 19.4037Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-[60px] w-[60px] transition duration-500 group-hover:block"
                >
                  <path
                    d="M2 9.94476L29.9114 0L58.5745 9.76794L53.9335 46.6961L29.9114 60L6.26521 46.8729L2 9.94476Z"
                    fill="white"
                  />
                  <path
                    d="M29.9555 7.00586L12.5635 45.702L19.0606 45.5915L22.5524 36.8621H38.1545L41.9778 45.702L48.1876 45.8125L29.9555 7.00586ZM29.9999 19.4037L35.8782 31.6908H24.8284L29.9999 19.4037Z"
                    fill="#DF2E31"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-black hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:hidden"
                >
                  <path
                    d="M28.3123 4.299C28.2018 4.30905 27.8499 4.34423 27.5332 4.36937C20.2297 5.02784 13.3887 8.96861 9.05585 15.0255C6.64313 18.3933 5.1 22.2134 4.51692 26.2597C4.31084 27.6722 4.28571 28.0894 4.28571 30.0045C4.28571 31.9196 4.31084 32.3368 4.51692 33.7492C5.91429 43.4051 12.7855 51.5179 22.1046 54.5237C23.7734 55.0615 25.5327 55.4285 27.5332 55.6496C28.3123 55.7351 31.6801 55.7351 32.4592 55.6496C35.9124 55.2676 38.8378 54.4131 41.723 52.9404C42.1654 52.7142 42.2508 52.6539 42.1905 52.6036C42.1503 52.5734 40.2653 50.0451 38.0034 46.989L33.8917 41.4347L28.7396 33.8095C25.9046 29.6174 23.5724 26.1894 23.5522 26.1894C23.5321 26.1843 23.512 29.5722 23.502 33.709C23.4869 40.9522 23.4819 41.2437 23.3914 41.4146C23.2607 41.6609 23.1602 41.7614 22.9491 41.872C22.7882 41.9524 22.6475 41.9675 21.8885 41.9675H21.0189L20.7877 41.8218C20.6369 41.7263 20.5263 41.6006 20.4509 41.4548L20.3453 41.2286L20.3554 31.1505L20.3705 21.0674L20.5263 20.8713C20.6067 20.7658 20.7776 20.6301 20.8983 20.5647C21.1043 20.4642 21.1848 20.4541 22.0544 20.4541C23.0798 20.4541 23.2507 20.4944 23.5171 20.7859C23.5925 20.8663 26.3822 25.0685 29.7198 30.1301C33.0573 35.1918 37.6214 42.1032 39.8632 45.4961L43.9347 51.6636L44.1408 51.5279C45.9654 50.3417 47.8956 48.6528 49.4236 46.8935C52.6757 43.1588 54.7718 38.6048 55.4755 33.7492C55.6816 32.3368 55.7067 31.9196 55.7067 30.0045C55.7067 28.0894 55.6816 27.6722 55.4755 26.2597C54.0781 16.6038 47.2069 8.49109 37.8878 5.48525C36.2441 4.95244 34.4949 4.58551 32.5346 4.36434C32.052 4.31408 28.7295 4.25878 28.3123 4.299ZM38.8378 19.851C39.0791 19.9716 39.2751 20.2028 39.3455 20.4441C39.3857 20.5748 39.3958 23.3695 39.3857 29.6677L39.3706 38.7053L37.7772 36.2625L36.1788 33.8196V27.25C36.1788 23.0026 36.1989 20.615 36.2291 20.4994C36.3095 20.2179 36.4854 19.9967 36.7267 19.866C36.9328 19.7605 37.0082 19.7504 37.7973 19.7504C38.5413 19.7504 38.6719 19.7605 38.8378 19.851Z"
                    fill="#7780A1"
                  />
                  <path
                    d="M43.6834 51.7735C43.5074 51.8841 43.4521 51.9595 43.608 51.8741C43.7185 51.8087 43.8995 51.673 43.8693 51.668C43.8543 51.668 43.7688 51.7182 43.6834 51.7735ZM43.3365 51.9997C43.2461 52.0701 43.2461 52.0751 43.3566 52.0198C43.417 51.9897 43.4672 51.9545 43.4672 51.9444C43.4672 51.9042 43.4421 51.9143 43.3365 51.9997ZM43.0852 52.1505C42.9947 52.2209 42.9947 52.2259 43.1053 52.1706C43.1656 52.1405 43.2159 52.1053 43.2159 52.0952C43.2159 52.055 43.1908 52.0651 43.0852 52.1505ZM42.8339 52.3013C42.7434 52.3717 42.7434 52.3767 42.854 52.3214C42.9143 52.2913 42.9646 52.2561 42.9646 52.246C42.9646 52.2058 42.9394 52.2159 42.8339 52.3013ZM42.4519 52.5024C42.2609 52.6029 42.2709 52.6431 42.4619 52.5476C42.5474 52.5024 42.6127 52.4571 42.6127 52.4471C42.6127 52.4119 42.6077 52.4169 42.4519 52.5024Z"
                    fill="#7780A1"
                  />
                </svg>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-[60px] w-[60px] transition duration-500 group-hover:block"
                >
                  <path
                    d="M28.3123 4.299C28.2018 4.30905 27.8499 4.34423 27.5332 4.36937C20.2297 5.02784 13.3887 8.96861 9.05585 15.0255C6.64313 18.3933 5.1 22.2134 4.51692 26.2597C4.31084 27.6722 4.28571 28.0894 4.28571 30.0045C4.28571 31.9196 4.31084 32.3368 4.51692 33.7492C5.91429 43.4051 12.7855 51.5179 22.1046 54.5237C23.7734 55.0615 25.5327 55.4285 27.5332 55.6496C28.3123 55.7351 31.6801 55.7351 32.4592 55.6496C35.9124 55.2676 38.8378 54.4131 41.723 52.9404C42.1654 52.7142 42.2508 52.6539 42.1905 52.6036C42.1503 52.5734 40.2653 50.0451 38.0034 46.989L33.8917 41.4347L28.7396 33.8095C25.9046 29.6174 23.5724 26.1894 23.5522 26.1894C23.5321 26.1843 23.512 29.5722 23.502 33.709C23.4869 40.9522 23.4819 41.2437 23.3914 41.4146C23.2607 41.6609 23.1602 41.7614 22.9491 41.872C22.7882 41.9524 22.6475 41.9675 21.8885 41.9675H21.0189L20.7877 41.8218C20.6369 41.7263 20.5263 41.6006 20.4509 41.4548L20.3453 41.2286L20.3554 31.1505L20.3705 21.0674L20.5263 20.8713C20.6067 20.7658 20.7776 20.6301 20.8983 20.5647C21.1043 20.4642 21.1848 20.4541 22.0544 20.4541C23.0798 20.4541 23.2507 20.4944 23.5171 20.7859C23.5925 20.8663 26.3822 25.0685 29.7198 30.1301C33.0573 35.1918 37.6214 42.1032 39.8632 45.4961L43.9347 51.6636L44.1408 51.5279C45.9654 50.3417 47.8956 48.6528 49.4236 46.8935C52.6757 43.1588 54.7718 38.6048 55.4755 33.7492C55.6816 32.3368 55.7067 31.9196 55.7067 30.0045C55.7067 28.0894 55.6816 27.6722 55.4755 26.2597C54.0781 16.6038 47.2069 8.49109 37.8878 5.48525C36.2441 4.95244 34.4949 4.58551 32.5346 4.36434C32.052 4.31408 28.7295 4.25878 28.3123 4.299ZM38.8378 19.851C39.0791 19.9716 39.2751 20.2028 39.3455 20.4441C39.3857 20.5748 39.3958 23.3695 39.3857 29.6677L39.3706 38.7053L37.7772 36.2625L36.1788 33.8196V27.25C36.1788 23.0026 36.1989 20.615 36.2291 20.4994C36.3095 20.2179 36.4854 19.9967 36.7267 19.866C36.9328 19.7605 37.0082 19.7504 37.7973 19.7504C38.5413 19.7504 38.6719 19.7605 38.8378 19.851Z"
                    fill="white"
                  />
                  <path
                    d="M43.6834 51.7735C43.5074 51.8841 43.4521 51.9595 43.608 51.8741C43.7185 51.8087 43.8995 51.673 43.8693 51.668C43.8543 51.668 43.7688 51.7182 43.6834 51.7735ZM43.3365 51.9997C43.2461 52.0701 43.2461 52.0751 43.3566 52.0198C43.417 51.9897 43.4672 51.9545 43.4672 51.9444C43.4672 51.9042 43.4421 51.9143 43.3365 51.9997ZM43.0852 52.1505C42.9947 52.2209 42.9947 52.2259 43.1053 52.1706C43.1656 52.1405 43.2159 52.1053 43.2159 52.0952C43.2159 52.055 43.1908 52.0651 43.0852 52.1505ZM42.8339 52.3013C42.7434 52.3717 42.7434 52.3767 42.854 52.3214C42.9143 52.2913 42.9646 52.2561 42.9646 52.246C42.9646 52.2058 42.9394 52.2159 42.8339 52.3013ZM42.4519 52.5024C42.2609 52.6029 42.2709 52.6431 42.4619 52.5476C42.5474 52.5024 42.6127 52.4571 42.6127 52.4471C42.6127 52.4119 42.6077 52.4169 42.4519 52.5024Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#3FB984] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:hidden"
                >
                  <path
                    opacity="0.3"
                    d="M35.939 7.71484L30.0001 18.0006L24.0611 7.71484H4.28577L30.0001 52.254L55.7143 7.71484H35.939Z"
                    fill="#7780A1"
                  />
                  <path
                    d="M35.9391 7.71484L30.0001 18.0006L24.0611 7.71484H14.5715L30.0001 34.4371L45.4287 7.71484H35.9391Z"
                    fill="#7780A1"
                  />
                </svg>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-[60px] w-[60px] transition duration-500 group-hover:block"
                >
                  <path
                    d="M35.939 7.71484L30 18.0006L24.061 7.71484H4.28571L30 52.254L55.7143 7.71484H35.939Z"
                    fill="white"
                  />
                  <path
                    d="M35.939 7.71484L30 18.0006L24.061 7.71484H14.5714L30 34.4371L45.4286 7.71484H35.939Z"
                    fill="#31475E"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#4F5B93] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="70"
                  height="60"
                  viewBox="0 0 70 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:hidden"
                >
                  <path
                    d="M35 48.4383C54.33 48.4383 70 40.2813 70 30.2191C70 20.157 54.33 12 35 12C15.67 12 0 20.157 0 30.2191C0 40.2813 15.67 48.4383 35 48.4383Z"
                    fill="#7780A1"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.82886 41.0066L13.6646 21.5887H22.5341C26.3696 21.8285 28.2875 23.7461 28.2875 27.1025C28.2875 32.8559 23.7329 36.2121 19.6573 35.9723H15.3427L14.3838 41.0066H9.82886ZM16.3014 32.3766L17.5001 25.1846H20.6165C22.2946 25.1846 23.4931 25.9038 23.4931 27.3421C23.2535 31.4177 21.3357 32.1368 19.1782 32.3766H16.3017H16.3014ZM27.3964 35.9723L31.2319 16.5547H35.7868L34.8279 21.5887H39.1427C42.9785 21.8285 44.4168 23.7461 43.9375 26.1436L42.2594 35.9723H37.4649L39.143 27.1025C39.3825 25.9038 39.3825 25.1846 37.7047 25.1846H34.1087L31.9513 35.9723H27.3964ZM41.9523 41.0066L45.7878 21.5887H54.6576C58.4934 21.8285 60.4112 23.7461 60.4112 27.1025C60.4112 32.8559 55.8563 36.2121 51.781 35.9723H47.4659L46.5069 41.0066H41.9523ZM48.4246 32.3766L49.6233 25.1846H52.74C54.418 25.1846 55.6165 25.9038 55.6165 27.3421C55.377 31.4177 53.4591 32.1368 51.3017 32.3766H48.4248H48.4246Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="70"
                  height="60"
                  viewBox="0 0 70 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-[60px] w-[60px] transition duration-500 group-hover:block"
                >
                  <path
                    d="M35 48.4383C54.33 48.4383 70 40.2813 70 30.2191C70 20.157 54.33 12 35 12C15.67 12 0 20.157 0 30.2191C0 40.2813 15.67 48.4383 35 48.4383Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.8288 41.0066L13.6646 21.5887H22.5341C26.3696 21.8285 28.2875 23.7461 28.2875 27.1025C28.2875 32.8559 23.7328 36.2121 19.6572 35.9723H15.3427L14.3837 41.0066H9.8288ZM16.3013 32.3766L17.5001 25.1846H20.6165C22.2945 25.1846 23.493 25.9038 23.493 27.3421C23.2535 31.4177 21.3356 32.1368 19.1782 32.3766H16.3016H16.3013ZM27.3963 35.9723L31.2318 16.5547H35.7868L34.8278 21.5887H39.1427C42.9784 21.8285 44.4167 23.7461 43.9374 26.1436L42.2593 35.9723H37.4649L39.1429 27.1025C39.3825 25.9038 39.3825 25.1846 37.7047 25.1846H34.1087L31.9513 35.9723H27.3963ZM41.9522 41.0066L45.7877 21.5887H54.6575C58.4933 21.8285 60.4112 23.7461 60.4112 27.1025C60.4112 32.8559 55.8563 36.2121 51.7809 35.9723H47.4658L46.5069 41.0066H41.9522ZM48.4245 32.3766L49.6232 25.1846H52.7399C54.418 25.1846 55.6165 25.9038 55.6165 27.3421C55.3769 31.4177 53.459 32.1368 51.3016 32.3766H48.4248H48.4245Z"
                    fill="#4F5B93"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#FF291A] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <path
                    d="M59.7593 28.1947C59.3314 27.7668 53.84 20.849 52.9129 19.708C51.9145 18.5669 51.4866 18.7809 50.8447 18.8522C50.2029 18.9235 43.2852 20.1359 42.5007 20.2072C41.7162 20.3498 41.217 20.6351 41.7162 21.3483C42.1441 21.9901 46.7084 28.4086 47.7068 29.9063L29.5211 34.2566L15.1151 10.0802C14.5446 9.22444 14.4019 8.93918 13.1182 9.01049C11.8345 9.08181 1.77891 9.93761 1.06574 9.93761C0.352576 10.0089 -0.431907 10.2942 0.281259 12.0058C0.994425 13.7174 12.4051 38.2503 12.6903 38.9635C12.9756 39.6766 13.8314 40.8177 15.757 40.3898C17.7538 39.8906 24.6002 38.1077 28.38 37.1092C30.3769 40.6751 34.3706 47.9494 35.1551 49.0191C36.1535 50.4454 36.8667 50.1602 38.3643 49.7323C39.5767 49.3757 57.0493 43.0998 57.8338 42.7432C58.6182 42.3867 59.1175 42.1727 58.5469 41.3882C58.119 40.8177 53.5548 34.6132 51.13 31.4039C52.7703 30.976 58.6896 29.407 59.3314 29.1931C60.0446 28.9791 60.1872 28.6226 59.7593 28.1947ZM26.7397 34.9697C26.5258 35.0411 16.3275 37.4658 15.8283 37.6084C15.2577 37.7511 15.2577 37.6798 15.2577 37.4658C15.1151 37.2519 3.13392 12.4337 2.91997 12.1484C2.77734 11.8632 2.77734 11.5779 2.91997 11.5779C3.06261 11.5779 12.5477 10.7221 12.833 10.7221C13.1896 10.7221 13.1182 10.7934 13.2609 11.0074C13.2609 11.0074 26.5971 34.0426 26.811 34.3992C27.0963 34.7558 26.9537 34.8984 26.7397 34.9697ZM55.409 40.3185C55.5516 40.6037 55.7656 40.7464 55.195 40.889C54.6958 41.103 38.0077 46.737 37.6512 46.8796C37.2946 47.0222 37.0806 47.0936 36.6527 46.4517C36.2248 45.8099 30.8048 36.4674 30.8048 36.4674L48.5626 31.8318C48.9905 31.6892 49.1331 31.6179 49.4184 32.0458C49.7037 32.545 55.2664 40.1045 55.409 40.3185ZM56.5501 27.7668C56.1222 27.8381 49.6323 29.4784 49.6323 29.4784L44.2836 22.2041C44.141 21.9901 43.9983 21.7762 44.3549 21.7048C44.7115 21.6335 50.7734 20.5638 51.0587 20.4925C51.3439 20.4211 51.5579 20.3498 51.9145 20.849C52.2711 21.2769 56.8353 27.1249 57.0493 27.3389C57.2632 27.5528 56.978 27.6954 56.5501 27.7668Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#E54C21] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:hidden"
                >
                  <path
                    d="M8.40169 53.7945L4 0L56.5676 0.108103L51.9133 53.7945L30.4822 60L8.40169 53.7945Z"
                    fill="#7780A1"
                  />
                  <path
                    d="M46.177 17.5355L46.7901 10.9688H13.4889L15.3288 31.1013H38.3114L37.4101 39.688L30.0498 41.6721L22.5814 39.5075L22.1846 34.3842H15.5814L16.4836 44.8473L30.0494 48.6356L43.7233 44.8473L45.5632 24.4265H21.4266L20.7411 17.5355H46.177Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-[60px] w-[60px] transition duration-500 group-hover:block"
                >
                  <path
                    d="M8.40169 53.7945L4 0L56.5676 0.108103L51.9133 53.7945L30.4822 60L8.40169 53.7945Z"
                    fill="white"
                  />
                  <path
                    d="M46.177 17.5355L46.7901 10.9688H13.4889L15.3288 31.1013H38.3114L37.4101 39.688L30.0498 41.6721L22.5814 39.5075L22.1846 34.3842H15.5814L16.4836 44.8473L30.0494 48.6356L43.7233 44.8473L45.5632 24.4265H21.4266L20.7411 17.5355H46.177Z"
                    fill="#E54C21"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#01D8FF] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <path
                    d="M60 29.7224C60 25.7477 55.0224 21.9808 47.391 19.6449C49.1521 11.8667 48.3693 5.67835 44.9205 3.69711C44.1256 3.23237 43.1961 3.01223 42.181 3.01223V5.7395C42.7436 5.7395 43.1961 5.84957 43.5752 6.05748C45.2385 7.01141 45.9601 10.6437 45.3975 15.3155C45.2629 16.4651 45.0428 17.6759 44.7737 18.9111C42.3767 18.3241 39.7595 17.8716 37.0077 17.5781C35.3567 15.3155 33.6445 13.2609 31.9201 11.4631C35.9071 7.75744 39.6494 5.72727 42.1932 5.72727V3C38.83 3 34.4272 5.39707 29.9755 9.55524C25.5238 5.42153 21.1211 3.04892 17.7578 3.04892V5.77619C20.2894 5.77619 24.044 7.79413 28.031 11.4753C26.3188 13.2731 24.6066 15.3155 22.98 17.5781C20.2161 17.8716 17.5989 18.3241 15.2018 18.9234C14.9205 17.7004 14.7126 16.5141 14.5658 15.3767C13.991 10.7049 14.7004 7.07256 16.3514 6.1064C16.7183 5.88626 17.1953 5.78842 17.7578 5.78842V3.06115C16.7305 3.06115 15.8011 3.28129 14.9939 3.74603C11.5573 5.72727 10.7868 11.9034 12.5601 19.6572C4.95312 22.0053 0 25.7599 0 29.7224C0 33.6971 4.97758 37.4639 12.609 39.7998C10.8479 47.5781 11.6307 53.7664 15.0795 55.7477C15.8744 56.2124 16.8039 56.4325 17.8312 56.4325C21.1945 56.4325 25.5972 54.0355 30.0489 49.8773C34.5006 54.011 38.9034 56.3836 42.2666 56.3836C43.2939 56.3836 44.2234 56.1635 45.0306 55.6987C48.4672 53.7175 49.2377 47.5414 47.4643 39.7876C55.0469 37.4517 60 33.6849 60 29.7224ZM44.0766 21.565C43.6241 23.1427 43.0616 24.7693 42.4256 26.3958C41.9242 25.4174 41.3983 24.4391 40.8235 23.4607C40.2609 22.4823 39.6616 21.5283 39.0624 20.5989C40.799 20.8557 42.4745 21.1737 44.0766 21.565ZM38.4753 34.5899C37.5214 36.2409 36.543 37.8064 35.5279 39.2617C33.7057 39.4207 31.8589 39.5063 30 39.5063C28.1533 39.5063 26.3066 39.4207 24.4965 39.2739C23.4815 37.8186 22.4908 36.2654 21.5369 34.6266C20.6074 33.0245 19.7636 31.3979 18.9931 29.7591C19.7513 28.1203 20.6074 26.4814 21.5247 24.8793C22.4786 23.2283 23.457 21.6629 24.4721 20.2075C26.2943 20.0485 28.1411 19.9629 30 19.9629C31.8467 19.9629 33.6934 20.0485 35.5035 20.1953C36.5186 21.6506 37.5092 23.2038 38.4631 24.8426C39.3926 26.4448 40.2364 28.0713 41.0069 29.7101C40.2364 31.349 39.3926 32.9878 38.4753 34.5899ZM42.4256 33C43.086 34.6388 43.6486 36.2776 44.1133 37.8675C42.5112 38.2589 40.8235 38.5891 39.0746 38.8459C39.6739 37.9042 40.2731 36.938 40.8357 35.9474C41.3983 34.969 41.9242 33.9784 42.4256 33ZM30.0245 46.0493C28.8871 44.8753 27.7497 43.5667 26.6245 42.1357C27.7252 42.1847 28.8504 42.2214 29.9878 42.2214C31.1374 42.2214 32.2748 42.1969 33.3877 42.1357C32.287 43.5667 31.1496 44.8753 30.0245 46.0493ZM20.9254 38.8459C19.1887 38.5891 17.5132 38.2711 15.9111 37.8797C16.3636 36.3021 16.9262 34.6755 17.5622 33.0489C18.0636 34.0273 18.5895 35.0057 19.1643 35.9841C19.7391 36.9625 20.3261 37.9164 20.9254 38.8459ZM29.9633 13.3954C31.1007 14.5695 32.2381 15.8781 33.3632 17.309C32.2625 17.2601 31.1374 17.2234 30 17.2234C28.8504 17.2234 27.713 17.2479 26.6001 17.309C27.7008 15.8781 28.8382 14.5695 29.9633 13.3954ZM20.9132 20.5989C20.3139 21.5406 19.7146 22.5067 19.1521 23.4973C18.5895 24.4757 18.0636 25.4541 17.5622 26.4325C16.9018 24.7937 16.3392 23.1549 15.8744 21.565C17.4766 21.1859 19.1643 20.8557 20.9132 20.5989ZM9.84509 35.9107C5.5157 34.064 2.71504 31.6425 2.71504 29.7224C2.71504 27.8023 5.5157 25.3685 9.84509 23.534C10.8969 23.0815 12.0465 22.6779 13.2328 22.2988C13.9299 24.6959 14.8471 27.1908 15.9845 29.7468C14.8594 32.2907 13.9543 34.7733 13.2695 37.1582C12.0587 36.779 10.9091 36.3632 9.84509 35.9107ZM16.4248 53.3873C14.7615 52.4333 14.04 48.8011 14.6025 44.1292C14.7371 42.9796 14.9572 41.7689 15.2263 40.5336C17.6233 41.1207 20.2405 41.5732 22.9923 41.8667C24.6433 44.1292 26.3555 46.1839 28.0799 47.9817C24.0929 51.6873 20.3506 53.7175 17.8068 53.7175C17.2564 53.7053 16.7917 53.5952 16.4248 53.3873ZM45.4342 44.0681C46.009 48.7399 45.2996 52.3722 43.6486 53.3384C43.2817 53.5585 42.8047 53.6563 42.2421 53.6563C39.7106 53.6563 35.956 51.6384 31.969 47.9572C33.6812 46.1594 35.3934 44.117 37.02 41.8545C39.7839 41.5609 42.4011 41.1084 44.7982 40.5092C45.0795 41.7444 45.2996 42.9307 45.4342 44.0681ZM50.1427 35.9107C49.0909 36.3632 47.9413 36.7668 46.755 37.1459C46.0579 34.7489 45.1406 32.254 44.0033 29.6979C45.1284 27.1541 46.0334 24.6714 46.7183 22.2866C47.9291 22.6657 49.0787 23.0815 50.1549 23.534C54.4843 25.3808 57.285 27.8023 57.285 29.7224C57.2727 31.6425 54.4721 34.0762 50.1427 35.9107Z"
                    fill="currentColor"
                  />
                  <path
                    d="M29.9878 35.311C33.0745 35.311 35.5768 32.8086 35.5768 29.7219C35.5768 26.6351 33.0745 24.1328 29.9878 24.1328C26.901 24.1328 24.3987 26.6351 24.3987 29.7219C24.3987 32.8086 26.901 35.311 29.9878 35.311Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#3FB984] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <path
                    d="M10.648,25.734a1.465,1.465,0,0,1-.157-.942H3.847L13.716,7.417l4.159,7.41,1.308-.976L15.076,6.467A1.752,1.752,0,0,0,13.7,5.56a1.531,1.531,0,0,0-1.343.924l-10,17.593a1.729,1.729,0,0,0-.087,1.656,1.526,1.526,0,0,0,1.456.706H12.1a1.523,1.523,0,0,1-1.456-.7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M29.636,24.112,21.589,9.823a1.692,1.692,0,0,0-1.351-.907,1.489,1.489,0,0,0-1.308.907l-1.064,1.7v3.3l2.371-4.071,7.951,14.071H25.163a1.377,1.377,0,0,1-.122.837l-.026.052a1.729,1.729,0,0,1-1.456.732h4.734a1.72,1.72,0,0,0,1.456-.732,1.548,1.548,0,0,0-.122-1.6Z"
                    fill="currentColor"
                  />
                  <path
                    d="M25.233,25.7l.026-.052.07-.139a1.278,1.278,0,0,0,.061-.7,2.11,2.11,0,0,0-.27-.724l-6.286-10.9-.95-1.656h-.017l-.959,1.648-6.277,10.9a2.18,2.18,0,0,0-.244.715,1.438,1.438,0,0,0,.148.942,1.563,1.563,0,0,0,1.482.7H23.725a1.79,1.79,0,0,0,1.508-.741ZM17.866,14.836,23.62,24.8H12.112Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#ff3e00] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.2829 1.94409C14.2083 3.42511 14.046 5.27647 13.0128 6.56576C13.8628 8.37306 13.2462 10.5713 11.5104 11.656L7.27012 14.3056C5.39667 15.4763 2.92892 14.9066 1.75825 13.0331C0.832798 11.5521 0.99519 9.70071 2.02833 8.41145C1.17829 6.60415 1.79488 4.40587 3.53076 3.32117L7.771 0.671576C9.64446 -0.499089 12.1122 0.070635 13.2829 1.94409ZM8.30092 1.51962C9.70601 0.641625 11.5568 1.06892 12.4348 2.47401C13.0645 3.48168 13.023 4.71945 12.4301 5.66263C11.8046 4.92992 10.9523 4.46839 10.0447 4.31762L10.7691 3.86494L10.2392 3.0169L5.15088 6.19641L5.6808 7.04446L7.80091 5.71967C9.206 4.84167 11.0568 5.26899 11.9348 6.67408C12.8128 8.07918 12.3855 9.92999 10.9804 10.808L6.7402 13.4576C5.33511 14.3356 3.4843 13.9083 2.6063 12.5032C1.97665 11.4955 2.01814 10.2578 2.61103 9.31458C3.23653 10.0473 4.08885 10.5088 4.99651 10.6596L4.27222 11.1122L4.80214 11.9602L9.89043 8.78071L9.36051 7.93267L7.24023 9.25756C5.83514 10.1356 3.98429 9.70821 3.10629 8.30312C2.2283 6.89803 2.65559 5.04722 4.06068 4.16922L8.30092 1.51962Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#2d53e5] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#f0dc55] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-420.000000, -7479.000000)"
                      fill="#000000"
                    >
                      <g transform="translate(56.000000, 160.000000)">
                        <path
                          d="M379.328,7337.432 C377.583,7337.432 376.455,7336.6 375.905,7335.512 L375.905,7335.512 L377.435,7334.626 C377.838,7335.284 378.361,7335.767 379.288,7335.767 C380.066,7335.767 380.563,7335.378 380.563,7334.841 C380.563,7334.033 379.485,7333.717 378.724,7333.391 C377.368,7332.814 376.468,7332.089 376.468,7330.558 C376.468,7329.149 377.542,7328.075 379.221,7328.075 C380.415,7328.075 381.275,7328.491 381.892,7329.578 L380.429,7330.518 C380.107,7329.941 379.758,7329.713 379.221,7329.713 C378.67,7329.713 378.321,7330.062 378.321,7330.518 C378.321,7331.082 378.67,7331.31 379.476,7331.659 C381.165,7332.383 382.443,7332.952 382.443,7334.814 C382.443,7336.506 381.114,7337.432 379.328,7337.432 L379.328,7337.432 Z M375,7334.599 C375,7336.546 373.801,7337.575 372.136,7337.575 C370.632,7337.575 369.731,7337 369.288,7336 L369.273,7336 L369.266,7336 L369.262,7336 L370.791,7334.931 C371.086,7335.454 371.352,7335.825 371.996,7335.825 C372.614,7335.825 373,7335.512 373,7334.573 L373,7328 L375,7328 L375,7334.599 Z M364,7339 L384,7339 L384,7319 L364,7319 L364,7339 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#3ebff8] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                    d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#1d9af6] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <path
                    fill="currentColor"
                    d="M7.094 0L12 11.596 16.906 0H7.094zM1.5 3.5L12 24 22.5 3.5H17L12 15 7 3.5z"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#7b17f7] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <path
                    fill="currentColor"
                    d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"
                  />
                </svg>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="group flex items-center justify-center rounded-[32px] bg-gray/10 py-[50px] px-[50px] transition duration-500 hover:scale-105 hover:bg-[#151515] hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                <svg
                  width="60"
                  height="60"
                  viewBox="-27 0 310 310"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[60px] w-[60px] transition duration-500 group-hover:text-white"
                >
                  <g>
                    <path
                      d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
