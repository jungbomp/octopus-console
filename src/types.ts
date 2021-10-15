import type { ElementType } from 'react';

export interface Market {
  marketId: number;
  channelId: number;
  channelName: string;
  soreName: string;
}

export interface Product {
  productCode: string;
  productTitle: string;
}

export interface Inventory {
  stdSku: string;
  productSupplier?: string;
  productName: string;
  productQty: number;
  productPrice: number;
  product?: Product;
}

export interface OrderItem {
  listingSku: string;
  unitPrice: number;
  unitQuantity: number;
  inventory: Inventory;
}

export interface Orders {
  channelOrderCode: string;
  orderDate: string;
  orderQty: number;
  orderPrice: number;
  orderShippingPrice: number;
  trackingNo: string;
  market: Market;
  orderItems: OrderItem[];
}

export interface MenuItemContext {
  pathId: string;
  title: string;
  path: string;
  exact?: boolean;
  icon: ElementType;
  component: ElementType;
}

export interface GlobalState {
  menuItem?: MenuItemContext;
}
