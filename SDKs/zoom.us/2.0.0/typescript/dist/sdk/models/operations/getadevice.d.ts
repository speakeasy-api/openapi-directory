import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetADevicePathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class GetADeviceSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * User to whom the device has been assigned.
**/
export declare class GetADevice200ApplicationJsonAssignee extends SpeakeasyBase {
    extensionNumber?: number;
    id?: string;
    name?: string;
}
/**
 * Line subscription.
**/
export declare class GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription extends SpeakeasyBase {
    displayName?: string;
    extensionNumber?: number;
    phoneNumber?: string;
}
/**
 * Return additional provisioning information with generic device SIP credentials.
**/
export declare class GetADevice200ApplicationJsonProvisionSipAccountsSharedLine extends SpeakeasyBase {
    alias?: string;
    lineSubscription?: GetADevice200ApplicationJsonProvisionSipAccountsSharedLineLineSubscription;
    outboundCallerId?: string;
}
export declare class GetADevice200ApplicationJsonProvisionSipAccounts extends SpeakeasyBase {
    authorizationId?: string;
    outboundProxy?: string;
    password?: string;
    sharedLine?: GetADevice200ApplicationJsonProvisionSipAccountsSharedLine;
    sipDomain?: string;
    userName?: string;
}
export declare enum GetADevice200ApplicationJsonProvisionTypeEnum {
    Assisted = "assisted",
    Ztp = "ztp",
    Manual = "manual"
}
/**
 * Provisioning information of a device.
**/
export declare class GetADevice200ApplicationJsonProvision extends SpeakeasyBase {
    sipAccounts?: GetADevice200ApplicationJsonProvisionSipAccounts[];
    type?: GetADevice200ApplicationJsonProvisionTypeEnum;
    url?: string;
}
export declare class GetADevice200ApplicationJsonSite extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum GetADevice200ApplicationJsonStatusEnum {
    Online = "online",
    Offline = "offline"
}
export declare class GetADevice200ApplicationJson extends SpeakeasyBase {
    assignee?: GetADevice200ApplicationJsonAssignee;
    deviceType?: string;
    displayName?: string;
    id?: string;
    macAddress?: string;
    provision?: GetADevice200ApplicationJsonProvision;
    site?: GetADevice200ApplicationJsonSite;
    status?: GetADevice200ApplicationJsonStatusEnum;
}
export declare class GetADeviceRequest extends SpeakeasyBase {
    pathParams: GetADevicePathParams;
    security: GetADeviceSecurity;
}
export declare class GetADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getADevice200ApplicationJSONObject?: GetADevice200ApplicationJson;
}
