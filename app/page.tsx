import { GameTemplate } from "./resources/templates/GameTemplate";

export default function Home() {
  return (
    <main className=" bg-white dark:bg-[#262B3CE3] text-black dark:text-gray-50 w-full flex justify-center p-4 py-20">
      <div className="max-w-2xl w-full">
        <GameTemplate />
      </div>
    </main>
  );
}
