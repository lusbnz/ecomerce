export interface ProductsType {
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity?: number;
}

export interface UserInfo {
  displayName?: string;
  email?: string;
  phoneNumber?: number | null;
  photoURL?: string;
  providerId?: string;
  uid?: string;
}

export interface StoreState {
  bazar: {
    productData: ProductsType[];
    userInfo: UserInfo;
  };
}
