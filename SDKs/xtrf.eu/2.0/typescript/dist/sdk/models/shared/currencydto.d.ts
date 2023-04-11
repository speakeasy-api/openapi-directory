import { SpeakeasyBase } from "../../../internal/utils";
/**
 * medium of money exchange (ie. euro or dollar)
 */
export declare class CurrencyDTO extends SpeakeasyBase {
    /**
     * should this value be available on the XTRF selection lists
     */
    active?: boolean;
    /**
     * should this value be set by default in XTRF selection lists
     */
    default?: boolean;
    /**
     * internal identifier
     */
    id?: number;
    /**
     * <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 code</a>
     */
    isoCode?: string;
    /**
     * localised name (formatted in the current user's locale)
     */
    name?: string;
    /**
     * should this value be available on the top of XTRF selection lists, in the Preferred section
     */
    preferred?: boolean;
    /**
     * specific symbol or abbreviation
     */
    symbol?: string;
}
