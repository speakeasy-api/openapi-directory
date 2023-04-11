import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssignFileToJobOutputRequest extends SpeakeasyBase {
    /**
     * Assigns file to job output files.
     */
    taskFileDTO: shared.TaskFileDTO;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class AssignFileToJobOutputResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
