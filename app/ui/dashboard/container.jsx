export default function Container({ children }) {
  return (
    <div className="p-6 h-full">
      <div className="h-full rounded-md p-10 bg-coal">{children}</div>
    </div>
  );
}
