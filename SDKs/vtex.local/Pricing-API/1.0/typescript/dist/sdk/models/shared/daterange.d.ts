import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Trade Policy Fixed Price Validity Period Object.
 */
export declare class DateRange extends SpeakeasyBase {
    /**
     * Indicates the date and time when the fixed price will start to be valid.
     */
    from: string;
    /**
     * Indicates the date and time from which the fixed price will no longer be valid.
     */
    to: string;
}
