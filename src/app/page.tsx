import { HomeClient } from "./client";

export default function Home() {
  return (
    <main className=" min-h-screen overflow-hidden bg-gray-300">
      <div className="container mx-auto py-10">
        <HomeClient />
      </div>
    </main>
  );
}
