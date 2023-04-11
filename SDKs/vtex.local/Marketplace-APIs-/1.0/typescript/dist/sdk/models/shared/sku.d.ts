import { SpeakeasyBase } from "../../../internal/utils";
import { Specifications } from "./specifications";
export declare class Sku extends SpeakeasyBase {
    /**
     * SKU reference code.
     */
    eans: string[];
    /**
     * Height of the SKU.
     */
    height: number;
    images: any[];
    /**
     * Length of the SKU.
     */
    length: number;
    /**
     * Measurement unit that should be used for this SKU. If this information doesn't apply, you should use the default value un.
     */
    measurementUnit: string;
    name: string;
    /**
     * SKU reference code.
     */
    refId: string;
    specifications: Specifications;
    /**
     * Unit multiplier for this SKU. If this information doesn't apply, you should use the default value 1.
     */
    unitMultiplier: number;
    /**
     * Weight of the SKU.
     */
    weight: number;
    /**
     * Width of the SKU.
     */
    width: number;
}
