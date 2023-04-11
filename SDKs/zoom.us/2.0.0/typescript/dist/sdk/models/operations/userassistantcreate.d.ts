import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserAssistantCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UserAssistantCreateUserAssistantsListAssistants extends SpeakeasyBase {
    /**
     * Assistant's email address.
     */
    email?: string;
    /**
     * Assistant's user ID.
     */
    id?: string;
}
/**
 * List of user's assistants.
 */
export declare class UserAssistantCreateUserAssistantsList extends SpeakeasyBase {
    /**
     * List of User's assistants.
     */
    assistants?: UserAssistantCreateUserAssistantsListAssistants[];
}
export declare class UserAssistantCreateRequest extends SpeakeasyBase {
    /**
     * User assistant.
     */
    requestBody: UserAssistantCreateUserAssistantsList;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Assistant added.
 */
export declare class UserAssistantCreate201ApplicationXML extends SpeakeasyBase {
    addAt?: Date;
    /**
     * User ID.
     */
    ids?: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Assistant added.
 */
export declare class UserAssistantCreate201ApplicationJSON extends SpeakeasyBase {
    addAt?: Date;
    /**
     * User ID.
     */
    ids?: string;
}
export declare class UserAssistantCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Assistant added.
     */
    userAssistantCreate201ApplicationJSONObject?: UserAssistantCreate201ApplicationJSON;
}
