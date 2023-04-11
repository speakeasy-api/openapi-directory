import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInstructions2Request extends SpeakeasyBase {
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class GetInstructions2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    instructionsDTO?: shared.InstructionsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
