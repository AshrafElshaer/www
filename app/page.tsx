import { Contributions } from "@/components/contributions";
import Experience from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import TechStack from "@/components/tech-stack";

export default function Page() {
  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <Header />
      <TechStack />
      <Experience />
      <Contributions />
      <Footer />
    </div>
  );
}
