import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
export declare class FixedPrice extends SpeakeasyBase {
    /**
     * Trade Policy Fixed Price Validity Period Object.
     */
    dateRange?: DateRange;
    /**
     * Trade Policy List Price Value.
     */
    listPrice: number;
    /**
     * Trade Policy Fixed Price Minimum Item Quantity.
     */
    minQuantity: number;
    /**
     * Trade Policy ID.
     */
    tradePolicyId: string;
    /**
     * Trade Policy Fixed Price Value.
     */
    value: number;
}
