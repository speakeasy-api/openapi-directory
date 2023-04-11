import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * Additional information about the item.
 */
export declare class AdditionalInfo extends SpeakeasyBase {
    /**
     * Item's brand ID.
     */
    brandId: string;
    /**
     * Item's brand name.
     */
    brandName: string;
    /**
     * Item's category ID.
     */
    categoriesIds: string;
    /**
     * Commercial conditions ID.
     */
    commercialConditionId: string;
    dimension: Dimension;
    /**
     * Information about services related to the item. For example: guarantee or installation.
     */
    offeringInfo: string;
    /**
     * Offering type.
     */
    offeringType: string;
    /**
     * Offering type ID.
     */
    offeringTypeId: string;
    /**
     * All product clusters related to the item.
     */
    productClusterId: string;
}
