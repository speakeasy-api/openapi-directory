import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProgressRequest extends SpeakeasyBase {
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class GetProgressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    taskProgressDTO?: shared.TaskProgressDTO;
}
