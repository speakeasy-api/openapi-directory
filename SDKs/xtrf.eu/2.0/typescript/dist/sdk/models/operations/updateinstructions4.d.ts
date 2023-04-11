import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateInstructions4Request extends SpeakeasyBase {
    /**
     * Updated instructions for a job.
     */
    stringDTO: shared.StringDTO;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class UpdateInstructions4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
