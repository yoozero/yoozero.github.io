import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { PiAppStoreLogoBold } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";

const projects = [
  {
    id: 1,
    title: "오롯 플러스",
    description: [
      "혈당 및 레시피 페이지 참여 작업",
      "안드로이드 및 iOS 테스트",
    ],
    year: "2023.04 - 2023.07",
    category: "WORK",
    type: "app",
    members: "-",
    intro: "산모의 루틴 케어 애플리케이션",
    tags: "flutter, firebase, xd",
    link: [
      "https://play.google.com/store/apps/details?id=com.gtbio.orot&hl=ko",
      "https://apps.apple.com/kr/app/%EC%98%A4%EB%A1%AF%ED%94%8C%EB%9F%AC%EC%8A%A4/id6466571666",
    ],
    img: "proj_o.MP4",
    thumb: "thumb_o"
  },
  {
    id: 2,
    title: "바야바즈",
    description: [
      "탈모 병원 및 관리 센터 지도 참여",
      "탈모 커뮤니티 참여",
      "프로젝트 전체 작업 및 기획에 참여",
      "탈모 병원 및 관리 센터 지도 참여",
      "탈모 위키피디아 참여",
      "프로젝트 전체 작업 및 기획에 참여",
    ],
    year: "2023.07 - 2023.12 (1차) / 2024.11 - 2024.12 (2차)",
    category: "WORK",
    type: "app",
    members: "-",
    intro: "탈모 예방 및 습관 개선 어플리케이션",
    tags: "flutter, firebase, xd",
    link: [
      "https://play.google.com/store/apps/details?id=com.neurocircuit.bayabas.flutter&hl=ko",
      "https://apps.apple.com/kr/app/%EB%B0%94%EC%95%BC%EB%B0%94%EC%A6%88-ai%EA%B8%B0%EB%B0%98-%ED%83%88%EB%AA%A8-%EC%8A%B5%EA%B4%80%EA%B4%80%EB%A6%AC-%ED%99%88%EC%BC%80%EC%96%B4-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1631768678",
    ],
    img: "proj_b.MP4",
    thumb: "thumb_b"
  },
  {
    id: 3,
    title: "아이D",
    description: [
      "진단 테스트",
      "병원 카드 추가 기능 작업",
      "SendBird 를 이용한 chatbot 기능 작업",
      "SendBird 를 이용한 채팅 기능 작업",
    ],
    year: "2024.11 - 2024.12",
    category: "WORK",
    type: "app",
    members: "-",
    intro: "산모들을 위한 산리 관리 어플리케이션",
    tags: "flutter, firebase, sendbird, xd",
    link: [
      // "",
      "https://apps.apple.com/kr/app/%EC%95%84%EC%9D%B4d/id6474520936",
    ],
    img: "proj_i.MP4",
    thumb: "thumb_i"
  },
  {
    id: 4,
    title: "탬버린즈 사이트 리뉴얼",
    description: "리엑트를 이용한 탬버린즈 사이트 리뉴얼",
    year: "2023.01 - 2023.01",
    category: "STUDY",
    type: "website",
    members: "-",
    intro: "탬버린즈 사이트 리뉴얼 작업",
    tags: "react, router, bootstrap, redux tool-kit, xd",
    link: ["https://www.tamburins.com/en/"],
    img: "proj_t.MP4",
    thumb: "study_t"
  },
  {
    id: 5,
    title: "포트폴리오 사이트",
    description: "작업 중인 리액트 포트폴리오 사이트",
    year: "2025.03 - 2025.04",
    category: "STUDY",
    type: "website",
    members: "-",
    intro: "포트폴리오 사이트",
    tags: "react, tailwind css, figma",
    link: [""],
    img: "proj_p.mp4",
    thumb: "study_p"
  },
  {
    id: 7,
    title: "영화의 전당 사이트 리뉴얼",
    description: "반응형 웹 사이트 제작, Swiper Plug-In 사용, KaKao Map API를 사용, 미디어 쿼리를 통하여 PC, Tablet, Mobile 구현",
    year: "2022.10 - 2022.10",
    category: "STUDY",
    type: "website",
    members: "-",
    intro: "영화의 전당 사이트 리뉴얼 작업",
    tags: "html, css, xd",
    link: ["https://yoojae.github.io/project02/"],
    img: "proj_m.MP4",
    thumb: "study_m"
  },
];

const Project = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  // 배경 스크롤 방지
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const filteredProjects =
    selectedTab === "ALL"
      ? projects
      : projects.filter((project) =>
        selectedTab === "FLUTTER"
          ? project.type === "app"
          : selectedTab === "REACT"
            ? project.tags.includes("react")
            : selectedTab === "HTML"
              ? project.tags.includes("html")
              : false
      );

  return (
    <div className="relative w-full md:w-4/5 px-4 md:px-0 mt-24 min-h-screen pt-20">
      <h2 className="text-3xl font-bold text-center mb-2">P<span className="font-marker">R</span>OJECT</h2>
      <h2 className="text-base font-normal text-center mb-8 text-blue-500">
        외부로 공개된 참여 프로젝트를 표시합니다
      </h2>

      <div className="flex justify-center space-x-4 mb-12">
        {["ALL", "FLUTTER", "REACT", "HTML"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedTab === tab
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>


      <div
        className={`grid gap-6 ${selectedTab === "ALL" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
          }`}
        style={{ gridAutoRows: "minmax(100px, auto)" }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex justify-between bg-white p-4 rounded-lg cursor-pointer transition-colors duration-0 ease-in-out hover:bg-blue-500 hover:text-white max-w-[700px] w-full mx-auto"
            style={{ boxShadow: "0 6px 30px rgba(0, 0, 0, 0.07)" }}
            onClick={() => setSelectedProject(project)}
          >

            <div className="w-1/2">
              <div className="text-lg font-bold mb-2">
                {project.title}
                <span className="text-xs text-blue-500 font-light ml-2">
                  {project.category}
                </span>
              </div>
              <p className="text-sm text-gray-500">{project.intro}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
                <span>{project.year}</span>
              </div>
            </div>
            <div className="w-1/2 h-32">
              <img
                src={`/images/${project.thumb}.png`}
                alt="project thumbnail"
                className="w-full h-full object-scale-down"
              />
            </div>
          </div>
        ))}
      </div>


      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col lg:flex-row w-11/12 lg:w-3/5 h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden relative">

            <div className="w-full lg:w-2/5 h-64 lg:h-auto flex justify-center items-center bg-black">
              <video
                src={`/videos/${selectedProject.img}`}
                autoPlay
                loop
                muted
                className="w-full h-full rounded-t-xl lg:rounded-none lg:rounded-l-xl object-scale-down"
              />
            </div>

            <div className="w-full lg:w-3/5 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-4">{selectedProject.title}</h1>
                <button
                  className="flex items-center text-gray-700 mb-4 hover:text-blue-500"
                  onClick={() => setSelectedProject(null)}
                >
                  <IoClose className="text-2xl" />
                </button>
              </div>
              <p>{selectedProject.intro}</p>
              <p className="text-sm text-gray-500 mt-4">기간 {selectedProject.year}</p>
              <p className="text-sm text-gray-500">인원 {selectedProject.members}</p>

              <div className="flex flex-wrap gap-2 my-4">
                {selectedProject.tags.split(",").map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-300 text-sm text-white rounded-[5px] px-2"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                {(Array.isArray(selectedProject.link)
                  ? selectedProject.link
                  : selectedProject.link.split(",")
                ).map((link, idx) => {
                  if (!link) return null;
                  const Icon = link.includes("google")
                    ? FaGooglePlay
                    : link.includes("apple")
                      ? PiAppStoreLogoBold
                      : MdOutlineWeb;
                  return (
                    <a
                      key={idx}
                      href={link.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full text-black hover:bg-blue-500"
                    >
                      <Icon className={`text-lg text-white ${Icon === FaGooglePlay ? "pl-[2.5px]" : ""}`} />
                    </a>
                  );
                })}
              </div>

              <div className="w-full bg-gray-300 mt-4" style={{ height: "1px" }}></div>

              <p className="text-sm text-gray-500 mt-4">
                {Array.isArray(selectedProject.description)
                  ? selectedProject.description.map((desc, index) => (
                    <span key={index} className="block mb-4">
                      {desc}
                    </span>
                  ))
                  : selectedProject.description.split(",").map((desc, index) => (
                    <span key={index} className="block mb-4">
                      {desc.trim()}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Project;
