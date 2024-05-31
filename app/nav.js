"use client";

import Link from "next/link";

export function Nav() {
  const menuList = [
    {
      title: "🏠Home",
      url: "/",
    },
    {
      title: "🛠️Branch Tool",
      url: "/branchtool",
    },
    {
      title: "💕Intimacy Tool (Developing)",
      url: "playmechat://ul.playmechat.com/unity/container?unityPageId=1&NpcUserId=202628",
    },
  ];
  return (
    <nav className="absolute bg-slate-100 shadow-md h-20 w-full top-0 left-0">
      <div
        id="title-bar"
        className="float-left px-5 h-full content-center grid">
        <Link className="inline-block mt-auto font-semibold" href="/">
          📦 PlayMe Toolbox
        </Link>
      </div>
      <div
        id="menu-bar"
        className={`w-1/2 h-full gap-x-4 flex align-middle float-right justify-end mr-5`}>
        {menuList.map((value, index) => (
          <Link
            href={value.url}
            key={index}
            className="flex flex-wrap content-center text-center">
            {value.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
