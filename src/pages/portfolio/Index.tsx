import { useState, useEffect } from "react";
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

  interface Projects {
    id: number;
    name: string;
    category: string;
    tags: Array<string>;
  }

  interface Categories {
    id: number;
    name: string;
  }

  const [projects, setProjects] = useState(null);
  const [categories, setCategories] = useState(null);

  const fetchProjects = async () => {
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

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/677154d9e41b4d34e46ce0b7",
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
      setCategories(json.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProjects();
  }, []);

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
            {categories && projects ? (
              <>
                <div className="overflow-x-auto">
                  <ul className="filters portfolio-filter mx-auto flex w-max gap-7 whitespace-nowrap pb-2.5 font-bold dark:text-white">
                    <li
                      className={`filter ${
                        activeTab === "all" ? "active" : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveTab("all")}
                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                      >
                        All Work
                      </button>
                    </li>
                    {categories &&
                      categories.map((category: Categories) => (
                        <>
                          <li
                            key={category.id}
                            className={`filter ${
                              activeTab === category.name ? "active" : ""
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => setActiveTab(category.name)}
                              className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                            >
                              {category.name}
                            </button>
                          </li>
                        </>
                      ))}
                  </ul>
                </div>
                <div className="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {projects &&
                    projects.map((project: Projects) => (
                      <>
                        <div
                          key={project.id}
                          className={`project ${
                            activeTab === "all" ||
                            activeTab === project.category
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
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
                              <h6 className="mb-1 text-black dark:text-white">
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
                        </div>
                      </>
                    ))}
                </div>
              </>
            ) : (
              <>
                <div className="w-full flex justify-center">
                  <span className="loading loading-spinner loading-lg mx-auto"></span>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
