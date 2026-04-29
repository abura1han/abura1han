import Image from "next/image";
import Link from "next/link";

const LINKS = {
  github: "https://github.com/abura1han",
  stackOverflow:
    "https://stackoverflow.com/users/19072826/abu-ra1han?tab=profile",
  twitter: "https://twitter.com/abura1han",
  email: "mailto:aburaihaninbox@gmail.com",
  resume: "/resume",
  linkedin: "https://linkedin.com/in/abura1han",
};

const ABOUT_MY_SELF =
  "Like to solve real world problems. Have interest on 💫 space, 🚀 rocket science";

export default function Home() {
  return (
    <div className=" bg-[#111] flex justify-center">
      <div className="mx-auto w-full max-w-[1900px] h-screen flex items-start  overflow-hidden justify-between relative">
        <div
          className="absolute w-[75%] h-full right-0 top-0"
          style={{
            backgroundImage: "url('/images/dark-background.jpg')",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Section 1 */}
        <div className="ml-20 z-10">
          <div className="z-40 max-w-xl">
            {/* Logo */}
            <div className="mt-16">
              <Link href={"/"}>
                {" "}
                <Image
                  src={"/images/abura1han.svg"}
                  width={398}
                  height={234}
                  alt="abura1han"
                />
              </Link>
            </div>

            {/* About myself */}
            <div className="mt-10">
              <p className="text-white font-medium text-xl">{ABOUT_MY_SELF}</p>
            </div>

            {/* Links */}
            <ul className="mt-10">
              <li className="flex items-center justify-start">
                <Image
                  src={"/images/list-pointer.svg"}
                  width={72}
                  height={72}
                  alt="Link list"
                />
                <a
                  href={LINKS.github}
                  rel="noreferrer"
                  target={"_blank"}
                  className={"text-white font-extralight text-xl ml-5"}
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center justify-start">
                <Image
                  src={"/images/list-pointer.svg"}
                  width={72}
                  height={72}
                  alt="Link list"
                />
                <a
                  href={LINKS.twitter}
                  rel="noreferrer"
                  target={"_blank"}
                  className={"text-white font-extralight text-xl ml-5"}
                >
                  X (Twitter)
                </a>
              </li>
              <li className="flex items-center justify-start">
                <Image
                  src={"/images/list-pointer.svg"}
                  width={72}
                  height={72}
                  alt="Link list"
                />
                <a
                  href={LINKS.email}
                  rel="noreferrer"
                  target={"_blank"}
                  className={"text-white font-extralight text-xl ml-5"}
                >
                  Email
                </a>
              </li>
              <li className="flex items-center justify-start">
                <Image
                  src={"/images/list-pointer.svg"}
                  width={72}
                  height={72}
                  alt="Link list"
                />
                <a
                  href={LINKS.resume}
                  rel="noreferrer"
                  target={"_blank"}
                  className={"text-white font-extralight text-xl ml-5"}
                >
                  Resume
                </a>
              </li>
            </ul>
            {/* <div className="absolute right-0 top-1/2 z-10 -translate-y-2/4 bg-gray-300 rounded-full overflow-hidden">
              <Image
                src={"/me-pro.jpeg"}
                alt="Abu Raihan"
                width={480}
                height={480}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
