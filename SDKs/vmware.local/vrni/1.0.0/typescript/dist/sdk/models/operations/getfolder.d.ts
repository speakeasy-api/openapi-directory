import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFolderSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetFolderRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
    /**
     * time in epoch seconds
     */
    time?: number;
}
export declare class GetFolderResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * OK
     */
    folder?: shared.Folder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
