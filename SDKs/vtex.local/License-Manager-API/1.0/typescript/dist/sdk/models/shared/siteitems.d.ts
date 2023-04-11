import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing complete information from a store
 */
export declare class SiteItems extends SpeakeasyBase {
    lv?: string;
    aliases?: string[];
    domains?: string[];
    /**
     * Hosts associated to the store
     */
    hosts?: string[];
    /**
     * ID of the store
     */
    id?: number;
    logo?: string;
    monetaryUnitId?: number;
    /**
     * Store name
     */
    name?: string;
    /**
     * Trading name of the store
     */
    tradingName?: string;
}
