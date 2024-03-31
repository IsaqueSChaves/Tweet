import { Tweet } from "./components/Tweet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Tweet tweet={"#MerryChristmas #HappyNewYear dsgdsg"}/>
      <Tweet tweet={"#HappyNewYear"}/>
      <Tweet tweet={"#HappyNewChineseYear"}/>
      <Tweet tweet={"#test"}/>
      <Tweet tweet={"teststs"}/>
    </main>
  );
}
