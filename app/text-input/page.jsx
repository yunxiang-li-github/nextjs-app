import LimitedTextInput from "@/app/ui/limited-text-input";
import PasswordInput from "@/app/ui/password-text-input";
import Container from "@/app/ui/dashboard/container";

function TextInput() {
  return (
    <>
      <h1 className="uppercase font-bold mb-4">Text Input</h1>
      <LimitedTextInput characterLimit={20} />
      <div className="m-10"></div>
      <PasswordInput minimum={8} />
    </>
  );
}

export default function Page() {
  return (
    <Container>
      <TextInput />
    </Container>
  );
}
