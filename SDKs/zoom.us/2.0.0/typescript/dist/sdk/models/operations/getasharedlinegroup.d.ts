import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetASharedLineGroupRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Shared Line Group.
     */
    sharedLineGroupId: string;
}
export declare class GetASharedLineGroup200ApplicationXMLMembersCommonAreaPhones extends SpeakeasyBase {
    /**
     * Unique identifier of the [Common Area Phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
     */
    id?: string;
    /**
     * Name of the [Common Area Phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
     */
    name?: string;
}
export declare class GetASharedLineGroup200ApplicationXMLMembersUsers extends SpeakeasyBase {
    /**
     * Unique identifier of the user.
     */
    id?: string;
    /**
     * Name of the user.
     */
    name?: string;
}
/**
 * View current [members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_3ffbbb77-a009-4c09-91e4-81fc264b61d6) of the shared line group.
 */
export declare class GetASharedLineGroup200ApplicationXMLMembers extends SpeakeasyBase {
    /**
     * [Common Area Phones](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) that are members of the shared line group.
     */
    commonAreaPhones?: GetASharedLineGroup200ApplicationXMLMembersCommonAreaPhones[];
    /**
     * Users who are members of the Shared Line Group.
     */
    users?: GetASharedLineGroup200ApplicationXMLMembersUsers[];
}
export declare class GetASharedLineGroup200ApplicationXMLPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique identifier of the phone number.
     */
    id?: string;
    /**
     * Phone number in E164 format.
     */
    number?: string;
}
/**
 * Site assigned to the Shared Line Group.
 */
export declare class GetASharedLineGroup200ApplicationXMLSite extends SpeakeasyBase {
    /**
     * Unique Identifier of the [Site](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-site/getasite).
     */
    id?: string;
    /**
     * Name of the Site.
     */
    name?: string;
}
/**
 * Status of the Shared Line Group.
 */
export declare enum GetASharedLineGroup200ApplicationXMLStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetASharedLineGroup200ApplicationXML extends SpeakeasyBase {
    /**
     * Display Name of the Shared Line Group.
     */
    displayName?: string;
    /**
     * Extension number assigned to the Shared Line Group.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Shared Line Group.
     */
    id?: string;
    /**
     * View current [members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_3ffbbb77-a009-4c09-91e4-81fc264b61d6) of the shared line group.
     */
    members?: GetASharedLineGroup200ApplicationXMLMembers;
    /**
     * Object representing information about phone number(s) assigned to the group.
     */
    phoneNumbers?: GetASharedLineGroup200ApplicationXMLPhoneNumbers[];
    /**
     * If you have multiple direct phone numbers assigned to the shared line group, this is the primary number selected for desk phones. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used.
     */
    primaryNumber?: string;
    /**
     * Site assigned to the Shared Line Group.
     */
    site?: GetASharedLineGroup200ApplicationXMLSite;
    /**
     * Status of the Shared Line Group.
     */
    status?: GetASharedLineGroup200ApplicationXMLStatusEnum;
    /**
     * Timezone used for the Business Hours.
     */
    timezone?: string;
}
export declare class GetASharedLineGroup200ApplicationJSONMembersCommonAreaPhones extends SpeakeasyBase {
    /**
     * Unique identifier of the [Common Area Phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
     */
    id?: string;
    /**
     * Name of the [Common Area Phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
     */
    name?: string;
}
export declare class GetASharedLineGroup200ApplicationJSONMembersUsers extends SpeakeasyBase {
    /**
     * Unique identifier of the user.
     */
    id?: string;
    /**
     * Name of the user.
     */
    name?: string;
}
/**
 * View current [members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_3ffbbb77-a009-4c09-91e4-81fc264b61d6) of the shared line group.
 */
export declare class GetASharedLineGroup200ApplicationJSONMembers extends SpeakeasyBase {
    /**
     * [Common Area Phones](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) that are members of the shared line group.
     */
    commonAreaPhones?: GetASharedLineGroup200ApplicationJSONMembersCommonAreaPhones[];
    /**
     * Users who are members of the Shared Line Group.
     */
    users?: GetASharedLineGroup200ApplicationJSONMembersUsers[];
}
export declare class GetASharedLineGroup200ApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique identifier of the phone number.
     */
    id?: string;
    /**
     * Phone number in E164 format.
     */
    number?: string;
}
/**
 * Site assigned to the Shared Line Group.
 */
export declare class GetASharedLineGroup200ApplicationJSONSite extends SpeakeasyBase {
    /**
     * Unique Identifier of the [Site](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-site/getasite).
     */
    id?: string;
    /**
     * Name of the Site.
     */
    name?: string;
}
/**
 * Status of the Shared Line Group.
 */
export declare enum GetASharedLineGroup200ApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetASharedLineGroup200ApplicationJSON extends SpeakeasyBase {
    /**
     * Display Name of the Shared Line Group.
     */
    displayName?: string;
    /**
     * Extension number assigned to the Shared Line Group.
     */
    extensionNumber?: number;
    /**
     * Unique Identifier of the Shared Line Group.
     */
    id?: string;
    /**
     * View current [members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_3ffbbb77-a009-4c09-91e4-81fc264b61d6) of the shared line group.
     */
    members?: GetASharedLineGroup200ApplicationJSONMembers;
    /**
     * Object representing information about phone number(s) assigned to the group.
     */
    phoneNumbers?: GetASharedLineGroup200ApplicationJSONPhoneNumbers[];
    /**
     * If you have multiple direct phone numbers assigned to the shared line group, this is the primary number selected for desk phones. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used.
     */
    primaryNumber?: string;
    /**
     * Site assigned to the Shared Line Group.
     */
    site?: GetASharedLineGroup200ApplicationJSONSite;
    /**
     * Status of the Shared Line Group.
     */
    status?: GetASharedLineGroup200ApplicationJSONStatusEnum;
    /**
     * Timezone used for the Business Hours.
     */
    timezone?: string;
}
export declare class GetASharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getASharedLineGroup200ApplicationJSONObject?: GetASharedLineGroup200ApplicationJSON;
}
