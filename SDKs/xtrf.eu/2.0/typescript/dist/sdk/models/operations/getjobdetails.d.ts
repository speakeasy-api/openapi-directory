import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJobDetailsRequest extends SpeakeasyBase {
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class GetJobDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    jobDto?: shared.JobDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
