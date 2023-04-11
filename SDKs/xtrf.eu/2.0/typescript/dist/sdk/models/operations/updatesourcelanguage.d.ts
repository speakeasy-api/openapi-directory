import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSourceLanguageRequest extends SpeakeasyBase {
    /**
     * Updated source language for a project.
     */
    sourceLanguageDTO: shared.SourceLanguageDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateSourceLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
