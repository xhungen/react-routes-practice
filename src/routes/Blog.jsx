import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  let [search, setSearch] = useSearchParams();

  if (loading) {
    return <div>Cargando...</div>;
  }

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearch({filter });
    } else {
      setSearch({  });
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center my-4 text-xl font-bold">Blog</h1>

        <div className="w-2/3 mx-auto my-5">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full p-2 border rounded-xl border-blue-700"
            value={search.get("filter") || ""}
            onChange={handleChange}
          />
        </div>

        {data
          .filter((item) => {
            let filter = search.get("filter");
            if (!filter) {
              return true;
            }

            let title = item.title.toLowerCase();
            return title.startsWith(filter.toLowerCase());
          })
          .map((item) => {
            return (
              <div
                className="text-blue-600 mb-2 block w-4/5 mx-auto font-bold"
                key={item.id}
              >
                <Link to={`/blog/${item.id}`}>
                  {item.id}-{item.title}
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Blog;
