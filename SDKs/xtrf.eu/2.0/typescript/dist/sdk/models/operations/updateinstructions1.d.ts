import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateInstructions1Request extends SpeakeasyBase {
    /**
     * Updated instructions of a given project.
     */
    instructionsDTO: shared.InstructionsDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateInstructions1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    instructionsDTO?: shared.InstructionsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
