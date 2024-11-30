import Skeleton from "./Skeleton";

export default function Loader() {
  return (
    <div className="container my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {[...new Array(8)].map((_, indx) => {
          return <Skeleton key={indx} />;
        })}
      </div>
    </div>
  );
}
