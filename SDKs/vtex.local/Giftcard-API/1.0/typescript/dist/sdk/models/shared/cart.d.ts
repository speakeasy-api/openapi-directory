import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
export declare class Cart extends SpeakeasyBase {
    discounts: number;
    grandTotal: number;
    items: Item[];
    itemsTotal: number;
    redemptionCode: string;
    relationName: string;
    shipping: number;
    taxes: number;
}
