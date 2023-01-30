export const filterData = (searchText,restaurantData) => {
    const filteredResturant = restaurantData?.filter((resturant) =>
      resturant?.data?.name
        .toLowerCase()
        .trim()
        .includes(searchText?.toLowerCase().trim())
    );

    return filteredResturant;
  };