import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFileByIdRequest extends SpeakeasyBase {
    /**
     * file's internal identifier
     */
    fileId: string;
}
export declare class GetFileByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
