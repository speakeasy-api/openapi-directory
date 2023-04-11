import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTaskFilesRequest extends SpeakeasyBase {
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class GetTaskFilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    taskFilesDTO?: shared.TaskFilesDTO;
}
