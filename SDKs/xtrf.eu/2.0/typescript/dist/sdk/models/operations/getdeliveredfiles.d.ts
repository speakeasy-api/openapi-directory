import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDeliveredFilesRequest extends SpeakeasyBase {
    /**
     * job's internal identifier
     */
    jobId: string;
}
export declare class GetDeliveredFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    projectFileDtos?: shared.ProjectFileDto[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
