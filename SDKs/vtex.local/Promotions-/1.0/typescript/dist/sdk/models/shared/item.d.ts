import { SpeakeasyBase } from "../../../internal/utils";
import { Param } from "./param";
export declare class Item extends SpeakeasyBase {
    id: string;
    index: number;
    isGift: boolean;
    logisticsInfos: string[];
    measurementUnit: string;
    params: Param[];
    priceSheet: string[];
    priceTags: string[];
    productSpecifications: string[];
    quantity: number;
    sellerId: string;
    unitMultiplier: number;
}
