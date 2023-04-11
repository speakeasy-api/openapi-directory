import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeStatus1Request extends SpeakeasyBase {
    /**
     * Changed job status.
     */
    jobStatusDTO: shared.JobStatusDTO;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class ChangeStatus1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
