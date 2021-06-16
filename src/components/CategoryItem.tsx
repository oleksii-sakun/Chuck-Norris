import React from "react";

interface CategoryItemProps {
  categoryName: string;

  onClick: () => void;
}

export default function CategoryItem({
  categoryName,

  onClick,
}: CategoryItemProps): JSX.Element {
  return (
    <div>
      <div className="category-item" onClick={onClick}>
        <p>{categoryName}</p>
      </div>
    </div>
  );
}
