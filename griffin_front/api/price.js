const { GET_PRICE } = API_URLS;

export const getPriceApi = async () => {
  return await axiosInstance.get(GET_PRICE);
};


