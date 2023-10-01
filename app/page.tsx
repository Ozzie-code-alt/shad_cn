import Navbar from "@/components/Nav";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="py-12 flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl">ShadCN is Awesome</h1>
        <p className="text-2xl text-muted-foreground">some simple description here</p>
        <div className="flex gap-6  items-center justify-center">
          <Button>Hello sample Button test</Button>
          <Button>Another one</Button>
        </div>
      </section>
    </>
  );
}
