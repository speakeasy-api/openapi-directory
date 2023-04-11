import { SpeakeasyBase } from "../../../internal/utils";
import { StateEnum } from "./stateenum";
export declare class HomeAddress extends SpeakeasyBase {
    /**
     * Address line 1 for employee home address
     */
    addressLine1: string;
    /**
     * Address line 2 for employee home address
     */
    addressLine2?: string;
    /**
     * Suburb for employee home address
     */
    city?: string;
    /**
     * Country of HomeAddress
     */
    country?: string;
    /**
     * PostCode for employee home address
     */
    postalCode?: string;
    /**
     * State abbreviation for employee home address
     */
    region?: StateEnum;
}
