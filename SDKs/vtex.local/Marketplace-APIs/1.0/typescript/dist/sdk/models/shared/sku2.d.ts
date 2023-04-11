import { SpeakeasyBase } from "../../../internal/utils";
import { Offer } from "./offer";
export declare class Sku2 extends SpeakeasyBase {
    /**
     * EAN's unique identifier number
     */
    eanId: string;
    /**
     * Whether the SKU is active in the sales channel (true), or not (false).
     */
    isActive: boolean;
    /**
     * Main image's information.
     */
    mainImage: Record<string, any>;
    /**
     * Summarized name of the SKU
     */
    name: string;
    /**
     * Complete name of the SKU
     */
    nameComplete: string;
    /**
     * Array with offers
     */
    offers: Offer[];
    /**
     * SKU's Reference ID
     */
    refId: string;
    /**
     * SKU's unique identifier number
     */
    skuId: string;
}
