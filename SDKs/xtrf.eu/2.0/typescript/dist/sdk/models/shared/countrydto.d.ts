import { SpeakeasyBase } from "../../../internal/utils";
/**
 * distinct entity in political geography (ie. Poland)
 */
export declare class CountryDTO extends SpeakeasyBase {
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
