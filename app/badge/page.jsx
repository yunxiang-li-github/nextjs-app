export default function Badge() {
  const name = "Yunxiang Li";
  const handle = "yunxiang-li-github";
  const img = "https://avatars.githubusercontent.com/u/122238474";

  return (
    <div className="bg-coal h-full flex flex-col justify-center">
      <div className="w-80 my-0 mx-auto border border-solid border-beige/10 rounded-lg p-6 flex flex-col gap-4 bg-charcoal text-center items-center">
        <img alt={name} src={img} className="w-52 rounded-full" />
        <div>
          <h4 className="my-5 size-4 w-full text-beige text-sm uppercase">
            {name}
          </h4>
          <p className="my-5 size-4 w-full text-beige/75 text-sm">@{handle}</p>
        </div>
      </div>
    </div>
  );
}
