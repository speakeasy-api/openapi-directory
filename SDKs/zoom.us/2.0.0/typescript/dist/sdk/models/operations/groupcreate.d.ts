import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GroupCreateApplicationJSON extends SpeakeasyBase {
    /**
     * Group name.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Group created.
 */
export declare class GroupCreate201ApplicationXML extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Group member count.
     */
    totalMembers?: number;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Group created.
 */
export declare class GroupCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Group member count.
     */
    totalMembers?: number;
}
export declare class GroupCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Group created.
     */
    groupCreate201ApplicationJSONObject?: GroupCreate201ApplicationJSON;
}
