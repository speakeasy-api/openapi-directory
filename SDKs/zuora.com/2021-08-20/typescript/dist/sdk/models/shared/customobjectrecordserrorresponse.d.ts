import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordsWithError } from "./customobjectrecordswitherror";
export declare class CustomObjectRecordsErrorResponse extends SpeakeasyBase {
    code?: number;
    details?: CustomObjectRecordsWithError[];
    message?: string;
}
