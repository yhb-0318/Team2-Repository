import { useState } from "react";
import projects from "../Data/ProjectData";
import ProjectCard from "../Components/ProjectCard";

const TABS = ["전체", "14기", "13기", "12기", "11기"];

export default function Project() {
  const [activeTab, setActiveTab] = useState("전체");

  const filteredProjects =
    activeTab === "전체"
      ? projects
      : projects.filter((p) => `${p.gen}기` === activeTab);

  return (
    <div className="min-h-screen bg-black px-6 py-16 md:px-20">
      <p className="text-lg font-semibold text-blue-500">LIKELION</p>
      <h1 className="mt-2 text-5xl font-extrabold text-white">PROJECTS</h1>
      <p className="mt-4 text-neutral-400">
        총{" "}
        <span className="font-semibold text-blue-500">
          {filteredProjects.length}건
        </span>
        의 프로젝트가 있습니다.
      </p>

      <div className="mt-10 flex gap-8 border-b border-neutral-800">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-base transition-colors ${
              activeTab === tab
                ? "border-b-2 border-blue-500 font-semibold text-white"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="mt-32 flex flex-col items-center text-center">
          <p className="text-lg font-bold text-neutral-300">
            아직 등록된 프로젝트가 없습니다.
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            {activeTab} 운영진, 아기사자들의 멋진 아이디어가 곧 현실이 될
            예정입니다. 기대해 주세요!
          </p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </div>
  );
}
