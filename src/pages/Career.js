import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { PiAppStoreLogoBold } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";

const Career = () => {
    const careerData = [
        {
            year: "2023.03 - 2025.03",
            details: [
                {
                    title: "Neurocircuit",
                    period: "2년",
                    projects: [
                        {
                            date: "25.01 - 25.03",
                            name: "앱 (미공개)",
                            link: [],
                            subtitle: "flutter 앱",
                            tasks: ["일부 파트 기획 참여"],
                            tool: [
                                "Flutter",
                                "Flutter Package",
                                "Android studio",
                                "XD"
                            ],
                        },
                        {
                            date: "24.11 - 24.12",
                            name: "아이D",
                            link: [
                                "https://apps.apple.com/kr/app/%EC%95%84%EC%9D%B4d/id6474520936"
                            ],
                            subtitle: "산모들을 위한 산리 관리 어플리케이션",
                            tasks: [
                                "진단 테스트",
                                "병원 카드 추가 기능 작업",
                                "SendBird 를 이용한 chatbot 기능 작업",
                                "SendBird 를 이용한 채팅 기능 작업",
                            ],
                            tool: [
                                "Flutter",
                                "Flutter Package",
                                "Firebase",
                                "Send Bird",
                                "Android studio",
                                "XD"
                            ],
                        },
                        {
                            date: "24.08 - 24.11",
                            name: "바야바즈 (2차 리뉴얼)",
                            link: [
                                "https://play.google.com/store/apps/details?id=com.neurocircuit.bayabas.flutter&hl=ko",
                                "https://apps.apple.com/kr/app/%EB%B0%94%EC%95%BC%EB%B0%94%EC%A6%88-ai%EA%B8%B0%EB%B0%98-%ED%83%88%EB%AA%A8-%EC%8A%B5%EA%B4%80%EA%B4%80%EB%A6%AC-%ED%99%88%EC%BC%80%EC%96%B4-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1631768678"
                            ],
                            subtitle: "탈모 예방 및 습관 개선 어플리케이션",
                            tasks: [
                                "탈모 병원 및 관리 센터 지도 참여",
                                "탈모 위키피디아 참여",
                                "프로젝트 전체 작업 및 기획에 참여",
                            ],
                            tool: [
                                "Flutter",
                                "Flutter Package",
                                "Firebase",
                                "Swagger UI",
                                "Android studio",
                                "Figma"
                            ],
                        },
                        {
                            date: "24.02 - 24.07",
                            name: "앱 (미공개)",
                            link: [],
                            subtitle: "flutter 앱",
                            tasks: ["일부 파트 기획 참여"],
                            tool: [
                                "Flutter",
                                "Flutter Package",
                                "Swagger UI",
                                "Android studio",
                                "Figma"
                            ],
                        },
                        {
                            date: "23.07 - 23.12",
                            name: "바야바즈 (1차 리뉴얼)",
                            link: [
                                "https://play.google.com/store/apps/details?id=com.neurocircuit.bayabas.flutter&hl=ko",
                                "https://apps.apple.com/kr/app/%EB%B0%94%EC%95%BC%EB%B0%94%EC%A6%88-ai%EA%B8%B0%EB%98%90-%ED%83%88%EB%AA%A8-%EC%8A%B5%EA%B4%80%EA%B4%80%EB%A6%AC-%ED%99%88%EC%BC%80%EC%96%B4-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1631768678"
                            ],
                            subtitle: "탈모 예방 및 습관 개선 어플리케이션",
                            tasks: [
                                "탈모 병원 및 관리 센터 지도 참여",
                                "탈모 커뮤니티 참여",
                                "프로젝트 전체 작업 및 기획에 참여",
                            ],
                            tool: [
                                "Flutter",
                                "Flutter Package",
                                "Firebase",
                                "Swagger UI",
                                "Android studio",
                                "XD"
                            ],
                        },
                        {
                            date: "23.05 - 23.07",
                            name: "오롯 플러스",
                            link: [
                                "https://play.google.com/store/apps/details?id=com.gtbio.orot&hl=ko",
                                "https://apps.apple.com/kr/app/%EC%98%A4%EB%A1%AF%ED%94%8C%EB%9F%AC%EC%8A%A4/id6466571666"
                            ],
                            subtitle: "산모의 루틴 케어 애플리케이션",
                            tasks: [
                                "혈당 및 레시피 페이지 참여 작업",
                                "안드로이드 및 iOS 테스트",
                            ],
                            tool: [
                                "Flutter",
                                "Flutter Package",
                                "Firebase",
                                "Android studio",
                                "XD"
                            ],
                        },
                    ],

                },
            ],
        },
        {
            year: "2015.01 - 2017.02",
            details: [
                {
                    title: "MK",
                    period: "2년 1개월",
                    projects: [
                        {
                            date: "",
                            name: "",
                            link: [],
                            subtitle: "해외 무역 에이전시 부서",
                            tasks: ["사무직 / 일정 관리 및 카달로그 발송 & 회계"],
                            tool: [],
                        },
                    ],
                },
            ],
        },
    ];

    const skillData = [
        {
            name: "HTML",
            icon: "🌐",
        },
        {
            name: "CSS",
            icon: "🎨",
        },
        {
            name: "JavaScript",
            icon: "⚡",
        },
        {
            name: "jQuery",
            icon: "🔧",
        },
        {
            name: "React",
            icon: "⚛️",
        },
        {
            name: "Sass",
            icon: "💅",
        },
        {
            name: "Tailwind CSS",
            icon: "🍃",
        },
        {
            name: "Bootstrap",
            icon: "🥾",
        },
        {
            name: "Dart",
            icon: "⏭️",
        },
        {
            name: "Flutter",
            icon: "🦋",
        },
        {
            name: "Git",
            icon: "🔗",
        },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen pt-20">

            <h2 className="text-3xl font-bold text-center mb-2">S<span className="font-marker">K</span>ILL</h2>
            <h2 className="text-base font-normal text-center mb-8 text-blue-500">기술 스택입니다</h2>


            <div className="w-full lg:w-2/5 flex flex-wrap justify-center items-center gap-6">
                {skillData.map((skill, index) => {
                    let fileName = skill.name.toLowerCase().replace(/\s/g, "");

                    if (skill.name === "Tailwind CSS") {
                        fileName = "Tailwind_CSS";
                    }

                    return (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center text-center p-4 w-24"
                        >
                            <div className="text-3xl mb-8 transition-transform transform group-hover:scale-110">
                                <img
                                    src={`/images/${fileName}.webp`}
                                    alt={skill.name}
                                    className="w-12 h-12"
                                />
                            </div>

                            <div className="absolute bottom-0 p-1 mt-4 left-1/2 transform -translate-x-1/2 w-20 text-center text-sm text-white bg-black rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {skill.name}
                            </div>
                        </div>
                    );
                })}
            </div>





            <h2 className="text-3xl font-bold text-center mb-2 mt-32">C<span className="font-marker">A</span>REER</h2>
            <h2 className="text-base font-normal text-center mb-12 text-blue-500">총 4년 경력의 타임라인입니다</h2>



            <div>
                {careerData.map((career, index) => (
                    <div key={index}>
                        {career.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>
                                <div className="flex items-center mb-4">
                                    <h3 className="text-lg font-bold text-gray-600 w-44 text-right">{career.year}</h3>
                                    <h4 className="text-lg font-bold ml-6">{detail.title}</h4>
                                    <p className="ml-[7px] text-xs bg-gray-200 rounded px-[6px] py-[1.5px] text-gray-700">
                                        {detail.period}
                                    </p>
                                </div>

                                <div>
                                    {detail.projects
                                        .filter((project) => project.date || project.name || project.subtitle)
                                        .map((project, pIndex) => (
                                            <div>
                                                <div key={pIndex} className="flex items-center text-gray-700 my-4">
                                                    <span className="w-44 text-right text-gray-500">{project.date}</span>
                                                    <span className="font-medium ml-6 bg-gray-100 rounded-[5px] px-2 py-[1px]">{project.name}</span>
                                                    <span className="ml-[2px] flex">
                                                        {project.link.map((link, linkIndex) => {
                                                            const isGoogle = link.includes("google");
                                                            const isApple = link.includes("apple");

                                                            return (
                                                                <a
                                                                    key={linkIndex}
                                                                    href={link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="ml-2 w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-white hover:bg-blue-500"
                                                                >
                                                                    {isGoogle && <FaGooglePlay className="pl-[2.5px]" />}
                                                                    {isApple && <PiAppStoreLogoBold />}
                                                                    {!isGoogle && !isApple && <IoDocumentText />}
                                                                </a>
                                                            );
                                                        })}
                                                    </span>
                                                </div>

                                                <div className="flex mb-12">
                                                    <div className="w-44 border-r-[2px] border-r-gray-100 border-dashed"></div>
                                                    <div className="ml-4">
                                                        <p className="text-gray-800 font-normal text-sm ml-4">
                                                            {project.subtitle}
                                                        </p>


                                                        <ul className="pl-6 text-sm text-gray-500">
                                                            {project.tasks.map((task, taskIndex) => (
                                                                <li key={taskIndex} className="flex items-center mt-1">
                                                                    <span className="mr-2">┈</span> {task}
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        <div className="ml-2 mt-4">
                                                            {project.tool.map((tool, toolIndex) => {
                                                                let bgColor = "bg-gray-400";

                                                                switch (tool) {
                                                                    case "Flutter":
                                                                        bgColor = "bg-sky-400";
                                                                        break;
                                                                    case "Flutter Package":
                                                                        bgColor = "bg-blue-500";
                                                                        break;
                                                                    case "Firebase":
                                                                        bgColor = "bg-orange-400";
                                                                        break;
                                                                    case "Swagger UI":
                                                                        bgColor = "bg-green-500";
                                                                        break;
                                                                    case "Android studio":
                                                                        bgColor = "bg-lime-500";
                                                                        break;
                                                                    case "Figma":
                                                                        bgColor = "bg-gray-500";
                                                                        break;
                                                                    case "XD":
                                                                        bgColor = "bg-purple-500";
                                                                        break;
                                                                }

                                                                return (
                                                                    <span
                                                                        key={toolIndex}
                                                                        className={`text-xs py-[4px] px-[6px] text-white rounded-[4px] ml-2 ${bgColor}`}
                                                                    >
                                                                        {tool}
                                                                    </span>
                                                                );
                                                            })}
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Career;
