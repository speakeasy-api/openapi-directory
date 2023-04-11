import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateInstructions2Request extends SpeakeasyBase {
    /**
     * Updated instructions of a given project.
     */
    instructionsDTO: shared.InstructionsDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateInstructions2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    instructionsDTO?: shared.InstructionsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
