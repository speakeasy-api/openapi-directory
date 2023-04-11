import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddMembersToSharedLineGroupApplicationJSONMembersUsers extends SpeakeasyBase {
    /**
     * Email address of the user.
     */
    email?: string;
    /**
     * Unique identifier of the user.
     */
    id?: string;
}
/**
 * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
 */
export declare class AddMembersToSharedLineGroupApplicationJSONMembers extends SpeakeasyBase {
    /**
     * Unique identifier(s) of the Common Area Phone.
     */
    commonAreaPhoneIds?: string[];
    /**
     * Zoom Phone users on the account.
     */
    users?: AddMembersToSharedLineGroupApplicationJSONMembersUsers[];
}
export declare class AddMembersToSharedLineGroupApplicationJSON extends SpeakeasyBase {
    /**
     * Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
     */
    members?: AddMembersToSharedLineGroupApplicationJSONMembers;
}
export declare class AddMembersToSharedLineGroupRequest extends SpeakeasyBase {
    requestBody?: AddMembersToSharedLineGroupApplicationJSON;
    /**
     * Unique Identifier of the shared line group.
     */
    sharedLineGroupId: string;
}
export declare class AddMembersToSharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created**
     *
     * @remarks
     * Members added successfully.
     */
    addMembersToSharedLineGroup201ApplicationJSONAny?: any;
}
