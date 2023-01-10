type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Product[];
}

interface ApiResponseSingleProduct {
  data: Product;
}
