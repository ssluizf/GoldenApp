import { HTMLProps } from "react";

export default function Textarea({
  className,
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
      className={`flex-1 bg-transparent outline-none resize-none overflow-hidden placeholder:text-black ${className}`}
      rows={1}
      onKeyUp={resizeTextareaWithContent}
      onKeyDown={resizeTextareaWithContent}
      {...props}
    />
  );
}
