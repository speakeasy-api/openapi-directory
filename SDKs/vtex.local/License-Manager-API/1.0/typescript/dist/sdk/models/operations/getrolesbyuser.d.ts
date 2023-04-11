import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRolesbyUserRequest extends SpeakeasyBase {
    /**
     * The media type of the body of the request. Default value for license manager protocol is application/json
     */
    contentType: string;
    /**
     * ID corresponding to the user
     */
    userId: string;
}
export declare class GetRolesbyUser200ApplicationJSON extends SpeakeasyBase {
    /**
     * ID of role
     */
    id?: number;
    /**
     * Name of role
     */
    name?: string;
}
export declare class GetRolesbyUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRolesbyUser200ApplicationJSONObjects?: GetRolesbyUser200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
