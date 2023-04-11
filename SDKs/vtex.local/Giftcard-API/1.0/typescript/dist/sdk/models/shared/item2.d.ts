import { SpeakeasyBase } from "../../../internal/utils";
import { PriceTag } from "./pricetag";
export declare class Item2 extends SpeakeasyBase {
    discount: number;
    id: string;
    name: string;
    price: number;
    priceTags: PriceTag[];
    productId: string;
    quantity: number;
    refId: string;
    shippingDiscount: number;
    value: number;
}
