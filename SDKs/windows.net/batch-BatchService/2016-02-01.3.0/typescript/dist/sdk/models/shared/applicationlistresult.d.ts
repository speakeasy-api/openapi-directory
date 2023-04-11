import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSummary } from "./applicationsummary";
/**
 * Response to a ApplicationOperations.List request.
 */
export declare class ApplicationListResult extends SpeakeasyBase {
    /**
     * The URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * The list of applications available in the account.
     */
    value?: ApplicationSummary[];
}
