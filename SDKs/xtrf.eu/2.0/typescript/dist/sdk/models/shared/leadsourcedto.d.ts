import { SpeakeasyBase } from "../../../internal/utils";
/**
 * origin of a customer (ie. recomendation from another customer)
 */
export declare class LeadSourceDTO extends SpeakeasyBase {
    /**
     * should this value be available on the XTRF selection lists
     */
    active?: boolean;
    /**
     * should be available for customer
     */
    availableForCustomer?: boolean;
    /**
     * should be available for provider
     */
    availableForProvider?: boolean;
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
