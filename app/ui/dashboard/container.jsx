export default function Container({ children }) {
  return (
    <div className="p-6 h-full">
      <div className="h-full rounded-md sm:p-10 p-4 bg-coal">{children}</div>
    </div>
  );
}
