import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#111] flex justify-center">
      <div className="mx-auto w-full max-w-[1600px] h-screen flex items-start  overflow-hidden justify-between">
        {/* Section 1 */}
        <div className="ml-20">
          <div className="z-40 max-w-xl">
            {/* Logo */}
            <div className="mt-10">
              <Image
                src={"/images/abura1han.svg"}
                width={398}
                height={234}
                alt="abura1han"
              />
            </div>

            {/* About myself */}
            <div className="mt-10">
              <p className="text-white font-medium text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque dolorum, cumque illo consequuntur ratione ab vero
                aperiam doloribus tempora excepturi at obcaecati! Ipsam fugit
                necessitatibus nihil, aspernatur pariatur esse iure.
              </p>
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
                  href="https://github.com/abura1han"
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
                  href="https://github.com/abura1han"
                  rel="noreferrer"
                  target={"_blank"}
                  className={"text-white font-extralight text-xl ml-5"}
                >
                  StackOverflow
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
                  href="https://github.com/abura1han"
                  rel="noreferrer"
                  target={"_blank"}
                  className={"text-white font-extralight text-xl ml-5"}
                >
                  Twitter
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
                  href="https://github.com/abura1han"
                  rel="noreferrer"
                  target={"_blank"}
                  className={"text-white font-extralight text-xl ml-5"}
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex-1">
          <div className="relative">
            <Image
              src={"/images/dark-background.jpg"}
              width={1084}
              height={1000}
              alt="Background"
              className="max-w-none absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
