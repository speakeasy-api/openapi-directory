import { SpeakeasyBase } from "../../../internal/utils";
/**
 * territorial unit within a country (ie. Nebraska)
 */
export declare class ProvinceDTO extends SpeakeasyBase {
    /**
     * should this value be available on the XTRF selection lists
     */
    active?: boolean;
    /**
     * country's identifier
     */
    countryId?: number;
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
}
