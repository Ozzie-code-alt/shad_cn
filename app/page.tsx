import Navbar from "@/components/Nav";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
<>
<Navbar/>
<section className="py-24 flex flex-col gap-8">
<h1>ShadCN is Awesome</h1>
<p>some simple description here</p>
<div className="flex gap-6 py-6 bg:red">
<Button>Hello sample Button test</Button>
<Button>Another one</Button>
</div>

</section>
</>
  )
}
