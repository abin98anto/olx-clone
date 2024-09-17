import { Link } from "react-router-dom";

type Rating = {
  rate: number;
  count: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type ProductsProp = {
  products: Product[];
  search: string;
  menu: string;
};

const Home = ({ products, search, menu }: ProductsProp) => {
  const searchTerm = search.toLowerCase();

  return (
    <div className="grid grid-cols-4 p-5">
      {products
        .filter((data: Product) =>
          data?.title?.toLowerCase().includes(searchTerm ? searchTerm : menu)
        )
        .map((data) => {
          return (
            <Link to="/details" state={{ data: data }} key={data.id}>
              <div className="border border-spacing-1 p-2 ml-3 mt-3">
                <img src={data.image} alt={data.title} className="w-60 h-48" />
                <h1 className="font-bold text-xl">$ {data.price}</h1>
                <h1>{data.title}</h1>
                <h1>{data.category}</h1>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Home;
