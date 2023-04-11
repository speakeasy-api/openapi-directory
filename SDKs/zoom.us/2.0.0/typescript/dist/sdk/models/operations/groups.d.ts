import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Group object.
 */
export declare class Groups200ApplicationXMLGroups extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Total number of members in this group.
     */
    totalMembers?: number;
}
/**
 * List of Groups.
 */
export declare class Groups200ApplicationXML extends SpeakeasyBase {
    /**
     * List of Group objects.
     */
    groups?: Groups200ApplicationXMLGroups[];
    /**
     * Total records.
     */
    totalRecords?: number;
}
/**
 * Group object.
 */
export declare class Groups200ApplicationJSONGroups extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Total number of members in this group.
     */
    totalMembers?: number;
}
/**
 * List of Groups.
 */
export declare class Groups200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of Group objects.
     */
    groups?: Groups200ApplicationJSONGroups[];
    /**
     * Total records.
     */
    totalRecords?: number;
}
export declare class GroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of groups returned.<br>
     * **Error Code:** `200`
     * Only available for paid accounts.
     */
    groups200ApplicationJSONObject?: Groups200ApplicationJSON;
}
