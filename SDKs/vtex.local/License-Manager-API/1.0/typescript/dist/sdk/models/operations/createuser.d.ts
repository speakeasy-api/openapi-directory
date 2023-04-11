import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Bad Request
 */
export declare class CreateUser400ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
/**
 * Success
 */
export declare class CreateUser200ApplicationJSON extends SpeakeasyBase {
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
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createUser200ApplicationJSONObject?: CreateUser200ApplicationJSON;
    /**
     * Bad Request
     */
    createUser400ApplicationJSONObject?: CreateUser400ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
