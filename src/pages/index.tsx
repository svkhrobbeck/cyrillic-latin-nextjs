import { useState } from "react";
import cx from "classnames";
import { ArrowLeftRight, Clipboard } from "lucide-react";
import { toCyrillic, toLatin } from "@yasudoro/latin-cyrillic";

import { Button, Textarea } from "@/components";
import { useClipboard } from "use-clipboard-copy";
import { toast } from "sonner";

const Home = () => {
  const [text, setText] = useState<string>("");
  const clipboard = useClipboard();

  const [action, setAction] = useState<"cyrillic" | "latin">("cyrillic");
  const isCyrillic = action === "cyrillic";

  const toggleAction = () => {
    if (isCyrillic) setAction("latin");
    else setAction("cyrillic");
  };

  const titles = {
    latin: "Lotin",
    cyrillic: "Krill",
  };

  return (
    <main className="py-6">
      <div className="mx-auto w-full max-w-[1200px] px-5">
        <div className={cx("relative flex w-full gap-5", !isCyrillic && "flex-row-reverse")}>
          <div className="absolute left-[50%] top-0 -translate-x-[50%]">
            <Button onClick={toggleAction}>
              <ArrowLeftRight size={18} />
            </Button>
          </div>

          <Textarea
            autoFocus={isCyrillic}
            value={toLatin(text)}
            onChange={e => isCyrillic && setText(e.target.value)}
            disabled={!isCyrillic}
            title={titles.latin}
          />
          <Textarea
            autoFocus={!isCyrillic}
            value={toCyrillic(text)}
            onChange={e => !isCyrillic && setText(e.target.value)}
            disabled={isCyrillic}
            title={titles.cyrillic}
          />
          <div className="absolute bottom-3 right-3">
            <Button
              onClick={() => {
                clipboard.copy(isCyrillic ? toCyrillic(text) : toLatin(text));
                toast.success("text copied");
              }}
              title="copy text"
            >
              <Clipboard size={18} />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
