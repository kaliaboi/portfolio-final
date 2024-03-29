"use client";

import { FC, Key, useEffect, useRef, useState } from "react";
import { Project } from "@/lib/projects";
import Text from "./ui/Text";

interface WorkCardProps {
  project: Project;
  key: Key;
}

const WorkCard: FC<WorkCardProps> = ({ project, key }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [topMargin, setTopMargin] = useState<number | undefined>(
    ref.current?.getBoundingClientRect().y
  );
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.addEventListener("scroll", () => {
        setTopMargin(ref.current?.getBoundingClientRect().y);
        if (topMargin && topMargin < 200 && topMargin > 0) {
          setActive(true);
        } else {
          setActive(false);
        }
      });
    }
  });

  return (
    <div
      ref={ref}
      key={key}
      className="card flex flex-col cursor-pointer"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={`image w-full h-80 ${
          active ? "bg-zinc-400" : "bg-zinc-950"
        } rounded-lg transition-all`}
      ></div>
      <div className="description mt-3">
        <Text>{project.title}</Text>
        <Text prominence="muted">{project.subtitle}</Text>
        <p>{String(active)}</p>
      </div>
    </div>
  );
};

export default WorkCard;
