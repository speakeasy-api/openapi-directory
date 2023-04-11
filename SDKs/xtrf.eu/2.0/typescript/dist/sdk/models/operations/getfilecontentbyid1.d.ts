import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFileContentById1Request extends SpeakeasyBase {
    /**
     * file's internal identifier
     */
    fileId: string;
    /**
     * file's name
     */
    fileName: string;
}
export declare class GetFileContentById1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
