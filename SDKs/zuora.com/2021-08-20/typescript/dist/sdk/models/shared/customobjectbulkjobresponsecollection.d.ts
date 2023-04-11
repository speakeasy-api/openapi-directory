import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkJobResponse } from "./customobjectbulkjobresponse";
/**
 * OK
 */
export declare class CustomObjectBulkJobResponseCollection extends SpeakeasyBase {
    /**
     * The number of custom object bulk jobs returned in the result page set.
     */
    count?: number;
    /**
     * The `cursor` points to the last job record of the current page.
     */
    cursor?: string;
    /**
     * All custom object bulk jobs returned in the result page set.
     */
    jobs: CustomObjectBulkJobResponse[];
}
