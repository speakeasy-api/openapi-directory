import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJobsRequest extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class GetJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    jobDtos?: shared.JobDto[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
