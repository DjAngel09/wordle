import { GameTemplate } from "./resources/templates/GameTemplate";

export default function Home() {
  return (
    <main className=" bg-white dark:bg-black text-black dark:text-gray-50 w-full flex justify-center">
      <div className="max-w-2xl w-full">
        <GameTemplate />
      </div>
    </main>
  );
}
