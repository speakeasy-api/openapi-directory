import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDatesRequest extends SpeakeasyBase {
    /**
     * New job dates.
     */
    jobDatesDto: shared.JobDatesDto;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class UpdateDatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
