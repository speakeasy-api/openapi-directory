import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddMembersToCallQueueSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AddMembersToCallQueueApplicationJSONMembersUsers extends SpeakeasyBase {
    /**
     * Email address of the user.
     */
    email?: string;
    /**
     * User ID: Unique Identifier of the user.
     */
    id?: string;
}
/**
 * A maximum of 10 members can be added at a time.
 */
export declare class AddMembersToCallQueueApplicationJSONMembers extends SpeakeasyBase {
    /**
     * Array of one or more Common Area Phone Ids of the Common Area Phone(s) that you would like to add to the Call Queue.
     */
    commonAreaPhoneIds?: string[];
    users?: AddMembersToCallQueueApplicationJSONMembersUsers[];
}
export declare class AddMembersToCallQueueApplicationJSON extends SpeakeasyBase {
    /**
     * A maximum of 10 members can be added at a time.
     */
    members?: AddMembersToCallQueueApplicationJSONMembers;
}
export declare class AddMembersToCallQueueRequest extends SpeakeasyBase {
    requestBody?: AddMembersToCallQueueApplicationJSON;
    /**
     * Unique Identifier of the Call Queue.
     */
    callQueueId: string;
}
export declare class AddMembersToCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created**<br>
     *
     * @remarks
     * Members added successfully.
     */
    addMembersToCallQueue201ApplicationJSONObject?: Record<string, any>;
}
