import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJobFilesRequest extends SpeakeasyBase {
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class GetJobFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    jobFilesDTO?: shared.JobFilesDto1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
