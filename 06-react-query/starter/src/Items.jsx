import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks";

const Items = () => {
  const { data, error, isLoading, isFetching } = useFetchTasks();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error)
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  console.log(data);

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
