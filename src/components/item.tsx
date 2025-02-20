import { useLocalStorage } from "../contexts/local-storage";
import { Checkbox } from "./checkbox";

type ItemProps = {
  title: string;
  url?: string;
};

export const Item = ({ title, url }: ItemProps) => {
  const { savedState, updateEndingState } = useLocalStorage();

  if (!url) {
    return null;
  }

  const isChecked = savedState.includes(url);

  return (
    <div className="flex items-center gap-4">
      <Checkbox
        id={url}
        value={url}
        checked={isChecked}
        onCheckedChange={(state) => {
          updateEndingState(url, !!state);
        }}
      />

      <label
        htmlFor={url}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>

      <a
        href={`https://thestanleyparable.fandom.com/wiki/Endings?#${url}`}
        target="_blank"
        rel="nofollow"
      >
        {`(link)`}
      </a>
    </div>
  );
};
