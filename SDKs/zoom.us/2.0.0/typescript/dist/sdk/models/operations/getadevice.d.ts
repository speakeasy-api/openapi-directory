import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetADeviceSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetADeviceRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the device.
     */
    deviceId: string;
}
/**
 * User to whom the device has been assigned.
 */
export declare class GetADevice200ApplicationXMLAssignee extends SpeakeasyBase {
    /**
     * Extension number of the Zoom Phone used by the user.
     */
    extensionNumber?: number;
    /**
     * User ID of the user to whom the device has been assigned.
     */
    id?: string;
    /**
     * Name of the user.
     */
    name?: string;
}
/**
 * Line subscription.
 */
export declare class GetADevice200ApplicationXMLProvisionSipAccountsSharedLineLineSubscription extends SpeakeasyBase {
    /**
     * Display name.
     */
    displayName?: string;
    /**
     * Extension number.
     */
    extensionNumber?: number;
    /**
     * Phone number.
     */
    phoneNumber?: string;
}
/**
 * Return additional provisioning information with generic device SIP credentials.
 */
export declare class GetADevice200ApplicationXMLProvisionSipAccountsSharedLine extends SpeakeasyBase {
    /**
     * Alias.
     */
    alias?: string;
    /**
     * Line subscription.
     */
    lineSubscription?: GetADevice200ApplicationXMLProvisionSipAccountsSharedLineLineSubscription;
    /**
     * Outbound caller ID.
     */
    outboundCallerId?: string;
}
export declare class GetADevice200ApplicationXMLProvisionSipAccounts extends SpeakeasyBase {
    /**
     * Authorization ID of the SIP account provided in the provisioning process.
     */
    authorizationId?: string;
    /**
     * Outbound proxy provided in the provisioning process.
     */
    outboundProxy?: string;
    /**
     * Password entered during the  provisioning process.
     */
    password?: string;
    /**
     * Return additional provisioning information with generic device SIP credentials.
     */
    sharedLine?: GetADevice200ApplicationXMLProvisionSipAccountsSharedLine;
    /**
     * SIP Domain provided in the provisioning process.<br>
     *
     * @remarks
     *
     */
    sipDomain?: string;
    /**
     * User name of the SIP account provided in the provisioning process.
     */
    userName?: string;
}
/**
 * [Provisioning type](https://support.zoom.us/hc/en-us/articles/360033223411). The value can be one of the following:
 *
 * @remarks
 *
 * * `ztp` : Zero touch provisioning.
 * * `assisted`: Assisted provisioning.
 * * `manual`: Manual provisioning.
 *
 *
 */
export declare enum GetADevice200ApplicationXMLProvisionTypeEnum {
    Assisted = "assisted",
    Ztp = "ztp",
    Manual = "manual"
}
/**
 * Provisioning information of a device.
 */
export declare class GetADevice200ApplicationXMLProvision extends SpeakeasyBase {
    /**
     * SIP Account details registered during the device provisioning process. This object will only be returned if manual provisioning was used for the device.
     */
    sipAccounts?: GetADevice200ApplicationXMLProvisionSipAccounts[];
    /**
     * [Provisioning type](https://support.zoom.us/hc/en-us/articles/360033223411). The value can be one of the following:
     *
     * @remarks
     *
     * * `ztp` : Zero touch provisioning.
     * * `assisted`: Assisted provisioning.
     * * `manual`: Manual provisioning.
     *
     *
     */
    type?: GetADevice200ApplicationXMLProvisionTypeEnum;
    /**
     * Provisioning URL. This field will only be returned for devices that were provisioned via `assisted` provisioning type.
     */
    url?: string;
}
export declare class GetADevice200ApplicationXMLSite extends SpeakeasyBase {
    /**
     * The [site](https://support.zoom.us/hc/en-us/articles/360020809672) of the phone user.
     */
    id?: string;
    /**
     * Name of the [site](https://support.zoom.us/hc/en-us/articles/360020809672).
     */
    name?: string;
}
/**
 * Status of the device. The value is either `online` or `offline`.
 */
export declare enum GetADevice200ApplicationXMLStatusEnum {
    Online = "online",
    Offline = "offline"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Device information retrieved successfully.
 */
export declare class GetADevice200ApplicationXML extends SpeakeasyBase {
    /**
     * User to whom the device has been assigned.
     */
    assignee?: GetADevice200ApplicationXMLAssignee;
    /**
     * Includes manufacturer name and the model name.
     */
    deviceType?: string;
    /**
     * Display name of the device.
     */
    displayName?: string;
    /**
     * Device ID - Unique Identifier of the Device.
     */
    id?: string;
    /**
     * MAC address or serial number of the device.
     */
    macAddress?: string;
    /**
     * Provisioning information of a device.
     */
    provision?: GetADevice200ApplicationXMLProvision;
    site?: GetADevice200ApplicationXMLSite;
    /**
     * Status of the device. The value is either `online` or `offline`.
     */
    status?: GetADevice200ApplicationXMLStatusEnum;
}
/**
 * User to whom the device has been assigned.
 */
export declare class GetADevice200ApplicationJSONAssignee extends SpeakeasyBase {
    /**
     * Extension number of the Zoom Phone used by the user.
     */
    extensionNumber?: number;
    /**
     * User ID of the user to whom the device has been assigned.
     */
    id?: string;
    /**
     * Name of the user.
     */
    name?: string;
}
/**
 * Line subscription.
 */
export declare class GetADevice200ApplicationJSONProvisionSipAccountsSharedLineLineSubscription extends SpeakeasyBase {
    /**
     * Display name.
     */
    displayName?: string;
    /**
     * Extension number.
     */
    extensionNumber?: number;
    /**
     * Phone number.
     */
    phoneNumber?: string;
}
/**
 * Return additional provisioning information with generic device SIP credentials.
 */
export declare class GetADevice200ApplicationJSONProvisionSipAccountsSharedLine extends SpeakeasyBase {
    /**
     * Alias.
     */
    alias?: string;
    /**
     * Line subscription.
     */
    lineSubscription?: GetADevice200ApplicationJSONProvisionSipAccountsSharedLineLineSubscription;
    /**
     * Outbound caller ID.
     */
    outboundCallerId?: string;
}
export declare class GetADevice200ApplicationJSONProvisionSipAccounts extends SpeakeasyBase {
    /**
     * Authorization ID of the SIP account provided in the provisioning process.
     */
    authorizationId?: string;
    /**
     * Outbound proxy provided in the provisioning process.
     */
    outboundProxy?: string;
    /**
     * Password entered during the  provisioning process.
     */
    password?: string;
    /**
     * Return additional provisioning information with generic device SIP credentials.
     */
    sharedLine?: GetADevice200ApplicationJSONProvisionSipAccountsSharedLine;
    /**
     * SIP Domain provided in the provisioning process.<br>
     *
     * @remarks
     *
     */
    sipDomain?: string;
    /**
     * User name of the SIP account provided in the provisioning process.
     */
    userName?: string;
}
/**
 * [Provisioning type](https://support.zoom.us/hc/en-us/articles/360033223411). The value can be one of the following:
 *
 * @remarks
 *
 * * `ztp` : Zero touch provisioning.
 * * `assisted`: Assisted provisioning.
 * * `manual`: Manual provisioning.
 *
 *
 */
export declare enum GetADevice200ApplicationJSONProvisionTypeEnum {
    Assisted = "assisted",
    Ztp = "ztp",
    Manual = "manual"
}
/**
 * Provisioning information of a device.
 */
export declare class GetADevice200ApplicationJSONProvision extends SpeakeasyBase {
    /**
     * SIP Account details registered during the device provisioning process. This object will only be returned if manual provisioning was used for the device.
     */
    sipAccounts?: GetADevice200ApplicationJSONProvisionSipAccounts[];
    /**
     * [Provisioning type](https://support.zoom.us/hc/en-us/articles/360033223411). The value can be one of the following:
     *
     * @remarks
     *
     * * `ztp` : Zero touch provisioning.
     * * `assisted`: Assisted provisioning.
     * * `manual`: Manual provisioning.
     *
     *
     */
    type?: GetADevice200ApplicationJSONProvisionTypeEnum;
    /**
     * Provisioning URL. This field will only be returned for devices that were provisioned via `assisted` provisioning type.
     */
    url?: string;
}
export declare class GetADevice200ApplicationJSONSite extends SpeakeasyBase {
    /**
     * The [site](https://support.zoom.us/hc/en-us/articles/360020809672) of the phone user.
     */
    id?: string;
    /**
     * Name of the [site](https://support.zoom.us/hc/en-us/articles/360020809672).
     */
    name?: string;
}
/**
 * Status of the device. The value is either `online` or `offline`.
 */
export declare enum GetADevice200ApplicationJSONStatusEnum {
    Online = "online",
    Offline = "offline"
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Device information retrieved successfully.
 */
export declare class GetADevice200ApplicationJSON extends SpeakeasyBase {
    /**
     * User to whom the device has been assigned.
     */
    assignee?: GetADevice200ApplicationJSONAssignee;
    /**
     * Includes manufacturer name and the model name.
     */
    deviceType?: string;
    /**
     * Display name of the device.
     */
    displayName?: string;
    /**
     * Device ID - Unique Identifier of the Device.
     */
    id?: string;
    /**
     * MAC address or serial number of the device.
     */
    macAddress?: string;
    /**
     * Provisioning information of a device.
     */
    provision?: GetADevice200ApplicationJSONProvision;
    site?: GetADevice200ApplicationJSONSite;
    /**
     * Status of the device. The value is either `online` or `offline`.
     */
    status?: GetADevice200ApplicationJSONStatusEnum;
}
export declare class GetADeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Device information retrieved successfully.
     */
    getADevice200ApplicationJSONObject?: GetADevice200ApplicationJSON;
}
