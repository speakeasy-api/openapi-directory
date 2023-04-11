import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordsWithError } from "./customobjectrecordswitherror";
/**
 * Internal error. Retry the returned records.
 */
export declare class CustomObjectRecordsThrottledResponse extends SpeakeasyBase {
    code?: number;
    details?: CustomObjectRecordsWithError[];
    message?: string;
}
