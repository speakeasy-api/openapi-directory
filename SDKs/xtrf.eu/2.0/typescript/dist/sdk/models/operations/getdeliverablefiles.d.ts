import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDeliverableFilesRequest extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class GetDeliverableFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectFileDtos?: shared.ProjectFileDto[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
