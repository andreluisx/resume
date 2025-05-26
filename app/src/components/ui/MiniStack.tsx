"use client";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export default function MiniStack({
  title,
  icon,
}: {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<"svg", "svg">> & {
    muiName: string;
  };
}) {
  const Icon = icon
  return (
    <button
      style={{ fontFamily: "Roboto" }}
      className="cursor-pointer px-6 flex flex-row gap-2 py-4 w-fit text-slate-100 bg-gradient-to-b hover:to-black hover:from-blue-950 from-black to-blue-950 rounded-2xl border border-gray-800 shadow-amber-50"
    >
      <p>{title}</p>
      <Icon />
    </button>
  );
}
