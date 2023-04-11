import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddRoleMembersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AddRoleMembersApplicationJSONMembers extends SpeakeasyBase {
    /**
     * Email address of the user to whom you would like to assign the role. Provide either the userId in the ID field or the email address in the email field. If both fields are provided, only userId is used.
     */
    email?: string;
    /**
     * User ID of the user to whom you would like to assign the role.
     */
    id?: string;
}
/**
 * Role members
 */
export declare class AddRoleMembersApplicationJSON extends SpeakeasyBase {
    /**
     * Array of userId/user email of users to whom you would like to assign this role. Upto 30 users can be assigned a role at once.
     */
    members?: AddRoleMembersApplicationJSONMembers[];
}
export declare class AddRoleMembersRequest extends SpeakeasyBase {
    /**
     * Role members
     */
    requestBody: AddRoleMembersApplicationJSON;
    /**
     * The role ID
     */
    roleId: string;
}
/**
 * **HTTP Status Code:** `201`<br>Members Added
 */
export declare class AddRoleMembers201ApplicationXML extends SpeakeasyBase {
    /**
     * Date and time at which the members are assigned to the role.
     */
    addAt?: Date;
    /**
     * User ID
     */
    ids?: string;
}
/**
 * **HTTP Status Code:** `201`<br>Members Added
 */
export declare class AddRoleMembers201ApplicationJSON extends SpeakeasyBase {
    /**
     * Date and time at which the members are assigned to the role.
     */
    addAt?: Date;
    /**
     * User ID
     */
    ids?: string;
}
export declare class AddRoleMembersResponse extends SpeakeasyBase {
    /**
     * **HTTP Status Code:** `201`<br>Members Added
     */
    addRoleMembers201ApplicationJSONObject?: AddRoleMembers201ApplicationJSON;
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
