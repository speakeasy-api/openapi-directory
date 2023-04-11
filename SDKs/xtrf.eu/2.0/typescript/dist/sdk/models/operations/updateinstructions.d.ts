import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateInstructionsRequest extends SpeakeasyBase {
    /**
     * Updated instructions for a job.
     */
    instructionsDTO: shared.InstructionsDTO;
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class UpdateInstructionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
