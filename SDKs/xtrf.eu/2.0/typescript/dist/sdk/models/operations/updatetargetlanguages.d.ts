import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTargetLanguagesRequest extends SpeakeasyBase {
    /**
     * Updated target languages for a project.
     */
    targetLanguagesDTO: shared.TargetLanguagesDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateTargetLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
