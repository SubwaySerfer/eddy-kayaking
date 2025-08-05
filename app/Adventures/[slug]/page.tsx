"use client";
import { useParams, usePathname } from "next/navigation";
import Kamenik from "./kamenik/page";
import Sveti from "./sveti-nikola-island/page";
import PigeonCave from "./pigeon-cave/page";
import Night from "./night-light/page";
import Vranjina from "./vranjina/page";

function Page() {
  const pathname = usePathname().split("/")[2];

  if (pathname === "kamenik") return <Kamenik />;
  if (pathname === "sveti-nikola") return <Sveti />;
  if (pathname === "pigeon-cave") return <PigeonCave />;
  if (pathname === "night-light") return <Night />;
  if (pathname === "vranjina") return <Vranjina />;

  return <div>404 Not Found</div>;
}

export default Page;
