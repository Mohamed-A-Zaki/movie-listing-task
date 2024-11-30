export default function Skeleton() {
  return (
    <div className="border p-3 rounded-md animate-pulse">
      <div className="w-full h-[200px] rounded-lg bg-gray-200" />
      <div className="h-6 bg-gray-200 rounded my-2 w-3/4" />
      <div className="flex justify-between">
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  );
}
