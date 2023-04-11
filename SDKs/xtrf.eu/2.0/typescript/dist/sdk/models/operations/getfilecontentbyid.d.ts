import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFileContentByIdRequest extends SpeakeasyBase {
    /**
     * file's internal identifier
     */
    fileId: string;
    /**
     * file's name
     */
    fileName: string;
}
export declare class GetFileContentByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
