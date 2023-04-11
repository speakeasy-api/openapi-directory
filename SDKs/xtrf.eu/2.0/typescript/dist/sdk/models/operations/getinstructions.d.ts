import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInstructionsRequest extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class GetInstructionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    instructionsDTO?: shared.InstructionsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
