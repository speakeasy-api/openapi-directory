import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateInstructions3Request extends SpeakeasyBase {
    /**
     * Updated instructions of a given task.
     */
    instructionsDTO: shared.InstructionsDTO;
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class UpdateInstructions3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    instructionsDTO?: shared.InstructionsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
