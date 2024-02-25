import Clock from "@/app/ui/clock";

export default function Home() {
  return (
    <>
      <img
        src="https://yesofcorsa.com/wp-content/uploads/2020/03/Yosemite-Firefall-Wallpaper.jpg"
        alt="Yosemite Firefall"
        className="object-cover w-full h-full fixed"
      />
      <div className="relative flex flex-col justify-between h-full">
        <div className="flex flex-row items-center justify-center h-3/5">
          <p className="text-8xl text-white font-bold">React Practice</p>
        </div>
        <div className="p-2 flex justify-end">
          <Clock />
        </div>
      </div>
    </>
  );
}
