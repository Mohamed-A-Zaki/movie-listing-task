import Footer from "@/components/footer/Footer";
import MoviesList from "@/components/movies-list/MoviesList";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MoviesList />
      <Footer />
    </>
  );
}
