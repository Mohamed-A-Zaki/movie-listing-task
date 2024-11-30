import { type Movie } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

export default function MovieItem({ poster, title, rating, year }: Movie) {
  return (
    <div className="border p-3 rounded-md ">
      <Image
        src={poster}
        alt="poster"
        className="w-full h-[200px] rounded-lg"
        width={200}
        height={300}
      />

      <div className="text-xl font-bold my-2">{title}</div>

      <div className="flex justify-between">
        <div>
          Date : <span>{year}</span>
        </div>
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {rating} <Star size={15} />
        </div>
      </div>
    </div>
  );
}
