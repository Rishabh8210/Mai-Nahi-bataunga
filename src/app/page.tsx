import { Navbar } from "@/components/Common/Navbar";
import { MainTitle } from "@/components/Home/MainTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen h-auto w-screen max-w-screen flex flex-col">
      <Navbar />
      <section className="h-fit w-full flex flex-col py-12">
        <MainTitle />
      </section>
    </div>
  );
}
