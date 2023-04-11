import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveRolefromUserRequest extends SpeakeasyBase {
    /**
     * The media type of the body of the request. Default value for license manager protocol is application/json
     */
    contentType: string;
    /**
     * ID of the role which will be removed from the user
     */
    roleId: string;
    /**
     * ID corresponding to the user
     */
    userId: string;
}
/**
 * Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information.
 */
export declare class RemoveRolefromUser400ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
export declare class RemoveRolefromUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information.
     */
    removeRolefromUser400ApplicationJSONObject?: RemoveRolefromUser400ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
