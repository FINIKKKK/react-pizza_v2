import React from 'react'
import ContentLoader from "react-content-loader";

const LoadingPizzaItem: React.FC = () => {
  return (
    <ContentLoader
      className="pizza-block pizza-block__loading"
      speed={2}
      width={280}
      height={550}
      viewBox="0 0 280 500"
      backgroundColor="#e6e6e6"
      foregroundColor="#f3f2f2"
    >
      <rect x="0" y="425" rx="5" ry="5" width="90" height="27" />
      <rect x="0" y="263" rx="5" ry="5" width="280" height="24" />
      <rect x="0" y="308" rx="5" ry="5" width="280" height="85" />
      <rect x="130" y="415" rx="20" ry="20" width="150" height="44" />
      <rect x="20" y="0" rx="150" ry="150" width="240" height="240" />
    </ContentLoader>
  );
}

export default LoadingPizzaItem;
