import { SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkJobResponse } from "./customobjectbulkjobresponse";
export declare class CustomObjectBulkJobResponseCollection extends SpeakeasyBase {
    count?: number;
    cursor?: string;
    jobs: CustomObjectBulkJobResponse[];
}
