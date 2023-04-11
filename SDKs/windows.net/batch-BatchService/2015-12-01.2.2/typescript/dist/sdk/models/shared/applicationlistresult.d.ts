import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSummary } from "./applicationsummary";
/**
 * Response to a ApplicationOperations.List request.
 */
export declare class ApplicationListResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets the list of applications available in the account.
     */
    value?: ApplicationSummary[];
}
