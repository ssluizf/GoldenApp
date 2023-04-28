import { HTMLProps } from "react";

export default function Textarea({
  className,
  onChange = () => {},
  ...props
}: HTMLProps<HTMLTextAreaElement>) {
  function resizeTextareaWithContent(e: any) {
    const textarea = e.target;

    textarea.style.height = "auto";

    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = `${scrollHeight}px`;
  }

  return (
    <textarea
      className={`flex-1 bg-transparent outline-none resize-none overflow-hidden ${className}`}
      rows={1}
      onChange={(e) => {
        resizeTextareaWithContent(e);
        onChange(e);
      }}
      {...props}
    />
  );
}
