import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Block from "./block";

export default function Page() {
  const DEFAULT_TITLE = "Theme 07-04-2023";
  const [pageTitle, setPageTitle] = useState(DEFAULT_TITLE);

  return (
    <div className="grid h-screen bg-gray-400">
      <div className="justify-self-end w-9/12">
        <div className="flex items-center mt-4 pl-6">
          <button type="button" title="Prev page" className="h-6">
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button type="button" title="Next page" className="h-6 ml-2">
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <input
            title="Page title"
            className="ml-4 bg-transparent outline-none"
            placeholder={DEFAULT_TITLE}
            value={pageTitle}
            onChange={(e) => setPageTitle(e.target.value)}
          />
        </div>
        <div className="my-16 px-24 space-y-8">
          {Array.from(Array(1).keys()).map((value, index) => (
            <Block key={`block-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
