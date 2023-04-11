import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRolesRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the call
     */
    id: string;
}
export declare class GetRolesResponse extends SpeakeasyBase {
    /**
     * Successful
     */
    calls?: shared.Call[];
    contentType: string;
    /**
     * Bad Request: The client should not repeat the request without modifications
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
