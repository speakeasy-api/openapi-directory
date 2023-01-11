import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordsErrorResponse } from "./customobjectrecordserrorresponse";
export declare class PostCustomObjectRecordsResponse extends SpeakeasyBase {
    error?: CustomObjectRecordsErrorResponse;
    records?: Record<string, any>[];
}
