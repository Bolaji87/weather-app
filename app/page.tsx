import Header from "@/components/Header";
import Main from "@/components/Main";

function Page() {
  return (
    <div className="bg-teal-700 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1  bg-gradient-to-r from-blue-400 via-blue-300 to-sky-300 flex justify-center items-start p-6">
        <Main />
      </main>
    </div>
  );
}

export default Page;
