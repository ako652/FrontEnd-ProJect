import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { Product } from "../types/types";
import Loading from "../components/Loading";

export default function Favorite() {
  const FavoriteList = useSelector(
    (state: RootState) => state.products.favoriteList
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="ProductListstyle">
          {FavoriteList.map((item: Product) => {
            return <ProductItem item={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
}
