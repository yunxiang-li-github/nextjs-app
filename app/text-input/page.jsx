import LimitedTextInput from "@/app/ui/limited-text-input";
import PasswordInput from "../ui/password-text-input";

export default function Page() {
  return (
    <div className="h-full rounded-md p-10 bg-coal">
      <LimitedTextInput characterLimit={20} />
      <div className="m-10"></div>
      <PasswordInput minimum={8} />
    </div>
  );
}
