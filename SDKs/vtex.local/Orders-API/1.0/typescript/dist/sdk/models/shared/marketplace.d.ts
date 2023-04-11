import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the marketplace related to the order.
 */
export declare class Marketplace extends SpeakeasyBase {
    /**
     * Marketplace base URL.
     */
    baseURL: string;
    /**
     * If is a certified marketplace.
     */
    isCertified: string;
    /**
     * Name of the marketplace.
     */
    name: string;
}
