import clsx from "clsx";
export default function Badge({ user, mode, children }) {
  const { name, img, handle, href } = user;

  return (
    <div className="h-full flex flex-col justify-top">
      <div
        className={clsx(
          "sm:w-80 w-4/5 my-0 mx-auto border border-solid border-beige/10 rounded-lg p-6 flex flex-col gap-4 text-center items-center",
          { "bg-charcoal": mode === "dark", "bg-yellow-50": mode === "light" }
        )}
      >
        <img alt={name} src={img} className="w-52 rounded-full" />
        <div>
          <h4
            className={clsx("my-5 size-4 w-full text-sm uppercase", {
              "text-beige": mode === "dark",
              "text-coal": mode === "light",
            })}
          >
            {name}
          </h4>
          <p
            className={clsx("my-5 size-4 w-full text-sm", {
              "text-beige/75": mode === "dark",
              "text-coal/75": mode === "light",
            })}
          >
            @{handle}
          </p>
          <div
            className={clsx("my-5 text-sm", {
              "text-beige/50": mode === "dark",
              "text-coal/50": mode === "light",
            })}
          >
            {children}
          </div>
          <a
            className={clsx(
              {
                "bg-yellow-500": mode === "dark",
                "bg-yellow-200 text-black": mode === "light",
              },
              "appearance-none px-4 py-2 rounded-lg text-xs w-full border-none font-semibold uppercase cursor-pointer mt-2 mb-2 transition-all duration-200 ease-in-out hover:opacity-80"
            )}
            href={href}
            target="_blank"
          >
            Add Friend
          </a>
        </div>
      </div>
    </div>
  );
}
