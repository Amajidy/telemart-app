import {Product, ProductType} from '@/libs/products/types';
import { Store } from '@/libs/stores/types';
import {useQuery} from "@tanstack/react-query";
import {undefined} from "valibot";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Generates a list of mock products with placeholder images.
 * @returns {Promise<Product[]>} A promise that resolves to an array of mock products.
 */
export function getProducts(): Product[] {
  return [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      description: 'High-quality noise-canceling headphones.',
      imageUrl: 'https://picsum.photos/seed/headphones/200/200',
      store: {} as Store,
      productType: ProductType.PHYSICAL,
      stock: 12,
      isApproved: true,
      reviews: [],
      attributes: [],
      variants: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'E-Book: JavaScript Mastery',
      price: 19.99,
      description: 'Learn advanced JavaScript techniques.',
      imageUrl: 'https://picsum.photos/seed/ebook/200/200',
      store: {} as Store,
      productType: ProductType.DIGITAL,
      isApproved: true,
      reviews: [],
      attributes: [],
      variants: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Graphic Design Service',
      price: 49.99,
      description: 'Professional graphic design services for your business.',
      imageUrl: 'https://picsum.photos/seed/design-service/200/200',
      store: {} as Store,
      productType: ProductType.SERVICE,
      isApproved: true,
      reviews: [],
      attributes: [],
      variants: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 1599.99,
      description: 'Latest-gen smartwatch with health tracking features.',
      imageUrl: 'https://picsum.photos/seed/smartwatch/200/200',
      store: {} as Store,
      productType: ProductType.PHYSICAL,
      stock: 5,
      isApproved: true,
      reviews: [],
      attributes: [],
      variants: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}

async function getProductById(id: number): Promise<Product>{
  return {
    id,
    name: 'Smartwatch',
    price: 1599.99,
    description: 'Latest-gen smartwatch with health tracking features.',
    imageUrl: 'https://picsum.photos/seed/smartwatch/200/200',
    store: {} as Store,
    productType: ProductType.PHYSICAL,
    stock: 5,
    isApproved: true,
    reviews: [],
    attributes: [],
    variants: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export function useGetProductById(id: number | null){

  return useQuery<Product>({
    queryKey: ['getProductById', id],
    queryFn: () => getProductById(id!),
    staleTime: 1000 * 60 * 5,
    retry: 2,
    enabled: id !== null,
  });
}
