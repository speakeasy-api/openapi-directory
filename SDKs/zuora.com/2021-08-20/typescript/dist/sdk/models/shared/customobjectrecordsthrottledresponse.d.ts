import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordsWithError } from "./customobjectrecordswitherror";
export declare class CustomObjectRecordsThrottledResponse extends SpeakeasyBase {
    code?: number;
    details?: CustomObjectRecordsWithError[];
    message?: string;
}
