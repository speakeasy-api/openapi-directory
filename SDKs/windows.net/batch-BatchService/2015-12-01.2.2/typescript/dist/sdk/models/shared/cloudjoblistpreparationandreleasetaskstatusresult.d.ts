import { SpeakeasyBase } from "../../../internal/utils";
import { JobPreparationAndReleaseTaskExecutionInformation } from "./jobpreparationandreleasetaskexecutioninformation";
/**
 * Response to a CloudJobOperations.ListPreparationAndReleaseTaskStatus request.
 */
export declare class CloudJobListPreparationAndReleaseTaskStatusResult extends SpeakeasyBase {
    /**
     * Gets or sets the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * Gets or sets a list of Job Preparation and Job Release task execution information.
     */
    value?: JobPreparationAndReleaseTaskExecutionInformation[];
}
