import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJobs1Request extends SpeakeasyBase {
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class GetJobs1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    jobDtos?: shared.JobDto[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
