import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddFileRequest extends SpeakeasyBase {
    fileDTO: shared.FileDTO;
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class AddFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
