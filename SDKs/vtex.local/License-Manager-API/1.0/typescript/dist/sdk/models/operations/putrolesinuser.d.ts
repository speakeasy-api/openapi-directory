import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutRolesinUserRequest extends SpeakeasyBase {
    /**
     * List of roles' IDs to add to the user or application key.
     */
    requestBody: number[];
    /**
     * ID corresponding to the user
     */
    userId: string;
}
/**
 * Unexpected error - One possible reason is that the userId is not present on the database.
 */
export declare class PutRolesinUser500ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
/**
 * Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information.
 */
export declare class PutRolesinUser400ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    message?: string;
}
export declare class PutRolesinUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information.
     */
    putRolesinUser400ApplicationJSONObject?: PutRolesinUser400ApplicationJSON;
    /**
     * Unexpected error - One possible reason is that the userId is not present on the database.
     */
    putRolesinUser500ApplicationJSONObject?: PutRolesinUser500ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
