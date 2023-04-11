import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * IM Group types:<br>`normal` - Only members can see automatically see the other members of this group. Other people can search for members within this group. <br>`shared` - Everyone under an account can see the group members automatically.<br>`restricted` - Nobody can see the group or search for members except the members in the group.
 */
export declare enum ImGroupCreateApplicationJSONTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}
export declare class ImGroupCreateApplicationJSON extends SpeakeasyBase {
    /**
     * Group name: must be unique to one account.
     */
    name?: string;
    /**
     * Members can search for others under same account.
     */
    searchByAccount?: boolean;
    /**
     * Members can search for others in the same email domain.
     */
    searchByDomain?: boolean;
    /**
     * Members can search for others under same master account, including all sub accounts.
     */
    searchByMaAccount?: boolean;
    /**
     * IM Group types:<br>`normal` - Only members can see automatically see the other members of this group. Other people can search for members within this group. <br>`shared` - Everyone under an account can see the group members automatically.<br>`restricted` - Nobody can see the group or search for members except the members in the group.
     */
    type?: ImGroupCreateApplicationJSONTypeEnum;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * IM Group created.
 */
export declare class ImGroupCreate201ApplicationXML extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Members can search for others under same account.
     */
    searchByAccount?: boolean;
    /**
     * Members can search for others in the same email domain.
     */
    searchByDomain?: boolean;
    /**
     * Members can search for others under same master account, including all sub accounts.
     */
    searchByMaAccount?: boolean;
    /**
     * Group member count.
     */
    totalMembers?: number;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * IM Group created.
 */
export declare class ImGroupCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Members can search for others under same account.
     */
    searchByAccount?: boolean;
    /**
     * Members can search for others in the same email domain.
     */
    searchByDomain?: boolean;
    /**
     * Members can search for others under same master account, including all sub accounts.
     */
    searchByMaAccount?: boolean;
    /**
     * Group member count.
     */
    totalMembers?: number;
}
export declare class ImGroupCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * IM Group created.
     */
    imGroupCreate201ApplicationJSONObject?: ImGroupCreate201ApplicationJSON;
}
