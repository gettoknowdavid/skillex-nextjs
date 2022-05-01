import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { CATEGORIES } from '../../../lib/category-type';
import CategoryCard from '../category-card';

function CategoriesList() {
  return (
    <FlexGrid
      className="category-flex"
      flexGridColumnCount={[1, 1, 4, 4]}
      flexGridColumnGap={['0px', '0px', 'scale900', 'scale900']}
      alignItems="flex-end"
      maxHeight="720px"
      padding={['40px 0px', '40px 0px', '48px 0px', '48px 0px']}
    >
      {CATEGORIES.map((category, index) => (
        <FlexGridItem className={`category-flex${index}`} key={category.id}>
          <CategoryCard category={category} index={index} />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}

export default CategoriesList;
