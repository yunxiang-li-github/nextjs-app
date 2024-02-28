import Clock from "@/app/ui/clock";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-full relative">
        <div className="z-0 absolute top-0 left-0 w-full sm:pl-24 sm:pt-8 pl-12 pt-4">
          <p className="text-6xl text-black font-bold">React Practice</p>
          <p className="text-4xl text-black font-bold hidden sm:block">
            - Yunxiang Li -
          </p>
        </div>

        <div className="h-full pt-36 pb-16 sm:px-24 px-12">
          <div className="h-full relative rounded-lg shadow-xl shadow-bg_alt z-10">
            <Image
              src="/desktop.jpg"
              alt="Yosemite Firefall"
              className="rounded-lg object-cover absolute w-full h-full hidden md:block bg-gray-100"
              width={1000}
              height={1000}
            />

            <Image
              src="/mobile.jpeg"
              alt=""
              className="rounded-lg object-cover absolute w-full h-full md:hidden bg-gray-100"
              width={1000}
              height={1000}
            />
            <div className="p-6 flex justify-end absolute bottom-0 right-0">
              <Clock />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-10 pr-12 pb-4">
          <p className="text-sm text-white sm:hidden">- Yunxiang Li -</p>
        </div>
        <div className="absolute bottom-0 left-0 h-2/5 w-full bg-[#fcba28] z-0"></div>
      </div>
    </>
  );
}
