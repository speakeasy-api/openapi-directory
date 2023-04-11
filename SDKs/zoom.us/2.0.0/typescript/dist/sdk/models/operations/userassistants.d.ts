import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserAssistantsRequest extends SpeakeasyBase {
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserAssistantsUserAssistantsListAssistants extends SpeakeasyBase {
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
export declare class UserAssistantsUserAssistantsList extends SpeakeasyBase {
    /**
     * List of User's assistants.
     */
    assistants?: UserAssistantsUserAssistantsListAssistants[];
}
export declare class UserAssistantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Success.
     */
    userAssistantsList?: UserAssistantsUserAssistantsList;
}
