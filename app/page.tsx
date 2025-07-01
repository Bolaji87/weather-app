import Header from "@/components/Header";
import WeatherForm from "@/components/WeatherForm";

function Page() {
  return (
    <div className="bg-teal-700 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-start p-6">
        <WeatherForm />
      </main>
    </div>
  );
}

export default Page;
