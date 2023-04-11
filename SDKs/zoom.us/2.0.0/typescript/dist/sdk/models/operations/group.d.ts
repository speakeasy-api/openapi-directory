import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GroupRequest extends SpeakeasyBase {
    /**
     * The group ID.<br>
     *
     * @remarks
     * Can be retrieved by calling [GET /groups](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups).
     */
    groupId: string;
}
/**
 * **HTTP Status Code:** `200`<br> Group returned.<br>
 *
 * @remarks
 * **Error Code:** `200`<br>
 * Only available for Paid account,{accountId}.
 */
export declare class Group200ApplicationXML extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Total count of members in the group.
     */
    totalMembers?: number;
}
/**
 * **HTTP Status Code:** `200`<br> Group returned.<br>
 *
 * @remarks
 * **Error Code:** `200`<br>
 * Only available for Paid account,{accountId}.
 */
export declare class Group200ApplicationJSON extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Total count of members in the group.
     */
    totalMembers?: number;
}
export declare class GroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br> Group returned.<br>
     *
     * @remarks
     * **Error Code:** `200`<br>
     * Only available for Paid account,{accountId}.
     */
    group200ApplicationJSONObject?: Group200ApplicationJSON;
}
