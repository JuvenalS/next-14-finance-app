import { Loader } from "lucide-react";
import Button from "./button";
import { useFormStatus } from "react-dom";

export default function SubmitButton(props) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      className={`${props.className} flex justify-center items-center space-x-2`}
    >
      {pending && <Loader className="animate-spin w-4 h-4" />}
      <span>{props.children}</span>
    </Button>
  );
}
