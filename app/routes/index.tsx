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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <p>{uselessFact.text}</p>
      <span>{uselessFact.source}</span>
    </div>
  );
};

export default Index;
