import { useSearchTern } from "../reactQueryCustomHooks";

export default function Gallery() {
  const { response, isLoading, isError } = useSearchTern();

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response?.data?.results || [];
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url || "default-placeholder.jpg"}
            key={item.id}
            alt={item.alt_description || "Image"}
            className="img"
          ></img>
        );
      })}
    </section>
  );
}
