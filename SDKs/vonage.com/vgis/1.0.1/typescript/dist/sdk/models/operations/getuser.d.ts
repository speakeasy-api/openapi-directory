import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request: The client should not repeat the request without modifications
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    user?: shared.User;
}
