import axios from "axios";
import { useLoaderData } from "remix";

interface UselessFact {
  text: string;
  source: string;
}

export const loader = async () => {
  const { data: uselessFact } = await axios.request({
    url: "https://uselessfacts.jsph.pl/random.json?language=en",
    method: "GET",
  });

  const { text, source } = uselessFact as UselessFact;

  return { text, source };
};

const Index = () => {
  const uselessFact = useLoaderData<UselessFact>();

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-900">
      <div className="flex flex-col gap-2 items-center justify-center w-2/3">
        <h2 className="text-4xl text-gray-100 font-bold selection:text-rose-200 first-letter:text-5xl">
          {uselessFact.text}
        </h2>
        <span className="text-base text-rose-400 italic">
          {uselessFact.source}
        </span>
      </div>
    </div>
  );
};

export default Index;
