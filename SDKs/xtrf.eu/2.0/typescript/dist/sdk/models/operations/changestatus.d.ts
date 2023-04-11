import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeStatusRequest extends SpeakeasyBase {
    /**
     * Changed job status.
     */
    jobStatusDTO: shared.JobStatusDTO;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class ChangeStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
