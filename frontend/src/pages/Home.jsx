import PostIt from "../components/PostIt";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="flex">
      <Navbar />
      <PostIt />
    </main>
  );
}
