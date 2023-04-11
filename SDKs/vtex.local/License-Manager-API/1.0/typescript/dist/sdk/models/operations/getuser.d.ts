import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserRequest extends SpeakeasyBase {
    /**
     * The media type of the body of the request. Default value for license manager protocol is application/json
     */
    contentType: string;
    /**
     * ID from queried user.
     */
    userId: string;
}
/**
 * Bad Request
 */
export declare class GetUser400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    message?: string;
}
/**
 * Success
 */
export declare class GetUser200ApplicationJSON extends SpeakeasyBase {
    /**
     * Email of user
     */
    email?: string;
    /**
     * ID of user
     */
    id?: string;
    /**
     * Name of user
     */
    name?: string;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getUser200ApplicationJSONObject?: GetUser200ApplicationJSON;
    /**
     * Bad Request
     */
    getUser400ApplicationJSONObject?: GetUser400ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
