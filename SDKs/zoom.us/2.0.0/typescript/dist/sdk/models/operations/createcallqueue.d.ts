import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateCallQueueSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class CreateCallQueueApplicationJSONMembersUsers extends SpeakeasyBase {
    /**
     * Email address of the user. This can be retrieved from the [List Users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/users) API.
     */
    email?: string;
    /**
     * User Id of the user. This can be retrieved from the [List Users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/users) API.
     */
    id?: string;
}
/**
 * A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
 */
export declare class CreateCallQueueApplicationJSONMembers extends SpeakeasyBase {
    /**
     * **Optional**<br>
     *
     * @remarks
     * Unique identifier of the [Common Area Phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones). This can be retrieved from the List Common Area Phones API.
     */
    commonAreaPhoneIds?: string[];
    /**
     * Users object. Provide either the id (userId) field or the email address of the user.
     */
    users?: CreateCallQueueApplicationJSONMembersUsers[];
}
export declare class CreateCallQueueApplicationJSON extends SpeakeasyBase {
    /**
     * Description for the Call Queue.
     */
    description?: string;
    /**
     * Phone extension number for the site.<br>
     *
     * @remarks
     *
     * If a site code has been [assigned](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites#h_79ca9c8f-c97b-4486-aa59-d0d9d31a525b) to the site, provide the short extension number instead of the original extension number..
     */
    extensionNumber?: number;
    /**
     * A list of one or more phone users to be included in the call queue. Provide either users or common area phone(s). Provide at least one user in the users object.
     */
    members?: CreateCallQueueApplicationJSONMembers;
    /**
     * Name of the Call Queue.
     */
    name: string;
    /**
     * Unique identifier of the site. Required only if [multiple sites](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) have been enabled. This can be retrieved from the [List Phone Sites](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-site/listphonesites) API.
     */
    siteId: string;
}
/**
 * **HTTP Status Code:** `201` **Created**<br>
 *
 * @remarks
 * Call Queue created successfully.
 */
export declare class CreateCallQueue201ApplicationXML extends SpeakeasyBase {
    /**
     * Extension number assigned for the Call Queue.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Call Queue.
     */
    id?: string;
    /**
     * Name of the Call Queue.
     */
    name?: string;
    /**
     * Status of the Call Queue.<br>
     *
     * @remarks
     * `active`: Call queue is enabled and active.<br>
     * `inactive`: Call queue is inactive. Inactive call queues cannot be called but will retain its settings and appear in the [Call Queues](https://zoom.us/pbx/page/telephone/groups#/groups) page.
     */
    status?: string;
}
/**
 * **HTTP Status Code:** `201` **Created**<br>
 *
 * @remarks
 * Call Queue created successfully.
 */
export declare class CreateCallQueue201ApplicationJSON extends SpeakeasyBase {
    /**
     * Extension number assigned for the Call Queue.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Call Queue.
     */
    id?: string;
    /**
     * Name of the Call Queue.
     */
    name?: string;
    /**
     * Status of the Call Queue.<br>
     *
     * @remarks
     * `active`: Call queue is enabled and active.<br>
     * `inactive`: Call queue is inactive. Inactive call queues cannot be called but will retain its settings and appear in the [Call Queues](https://zoom.us/pbx/page/telephone/groups#/groups) page.
     */
    status?: string;
}
export declare class CreateCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created**<br>
     *
     * @remarks
     * Call Queue created successfully.
     */
    createCallQueue201ApplicationJSONObject?: CreateCallQueue201ApplicationJSON;
}
