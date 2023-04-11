import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetACommonAreaPhoneSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetACommonAreaPhoneRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Common Area Phone. Use the unique identifier or the Mac address of the common area phone. The Mac address can be hyphenated (00-04-f2-5e-ec-3c) or not hyphenated (0004f25eec3c). You can retrieved this from the [List Common Area Phones API](https://marketplace.zoom.us/docs/api-reference/zoom-api/common-area-phones/listcommonareaphones).
     */
    commonAreaPhoneId: string;
}
export declare class GetACommonAreaPhone200ApplicationXMLProvisionSipAccounts extends SpeakeasyBase {
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
export declare enum GetACommonAreaPhone200ApplicationXMLProvisionTypeEnum {
    Assisted = "assisted",
    Ztp = "ztp",
    Manual = "manual"
}
/**
 * Provisioning information of the common area phone.
 */
export declare class GetACommonAreaPhone200ApplicationXMLProvision extends SpeakeasyBase {
    /**
     * SIP Account details registered during the device provisioning process. This object will only be returned if manual provisioning was used for the device.
     */
    sipAccounts?: GetACommonAreaPhone200ApplicationXMLProvisionSipAccounts[];
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
    type?: GetACommonAreaPhone200ApplicationXMLProvisionTypeEnum;
    /**
     * Provisioning URL. This field will only be returned for devices that were provisioned via `assisted` provisioning type.
     */
    url?: string;
}
export declare class GetACommonAreaPhone200ApplicationXMLSite extends SpeakeasyBase {
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) to which the common area desk phone is assigned.
     */
    id?: string;
    /**
     * Name of the site.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Common Area Phone details returned successfully.
 */
export declare class GetACommonAreaPhone200ApplicationXML extends SpeakeasyBase {
    /**
     * Type of device (manufacturer name + model name).
     */
    deviceType?: string;
    /**
     * Unique Identifier of the common area phone.
     */
    id?: string;
    /**
     *  Mac address or serial number.
     */
    macAddress?: string;
    /**
     * Display name of the common area phone.
     */
    name?: string;
    /**
     * Provisioning information of the common area phone.
     */
    provision?: GetACommonAreaPhone200ApplicationXMLProvision;
    site?: GetACommonAreaPhone200ApplicationXMLSite;
    /**
     * Status of the common area phone. It can be either `online` or `offline`.
     */
    status?: string;
}
export declare class GetACommonAreaPhone200ApplicationJSONProvisionSipAccounts extends SpeakeasyBase {
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
export declare enum GetACommonAreaPhone200ApplicationJSONProvisionTypeEnum {
    Assisted = "assisted",
    Ztp = "ztp",
    Manual = "manual"
}
/**
 * Provisioning information of the common area phone.
 */
export declare class GetACommonAreaPhone200ApplicationJSONProvision extends SpeakeasyBase {
    /**
     * SIP Account details registered during the device provisioning process. This object will only be returned if manual provisioning was used for the device.
     */
    sipAccounts?: GetACommonAreaPhone200ApplicationJSONProvisionSipAccounts[];
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
    type?: GetACommonAreaPhone200ApplicationJSONProvisionTypeEnum;
    /**
     * Provisioning URL. This field will only be returned for devices that were provisioned via `assisted` provisioning type.
     */
    url?: string;
}
export declare class GetACommonAreaPhone200ApplicationJSONSite extends SpeakeasyBase {
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) to which the common area desk phone is assigned.
     */
    id?: string;
    /**
     * Name of the site.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Common Area Phone details returned successfully.
 */
export declare class GetACommonAreaPhone200ApplicationJSON extends SpeakeasyBase {
    /**
     * Type of device (manufacturer name + model name).
     */
    deviceType?: string;
    /**
     * Unique Identifier of the common area phone.
     */
    id?: string;
    /**
     *  Mac address or serial number.
     */
    macAddress?: string;
    /**
     * Display name of the common area phone.
     */
    name?: string;
    /**
     * Provisioning information of the common area phone.
     */
    provision?: GetACommonAreaPhone200ApplicationJSONProvision;
    site?: GetACommonAreaPhone200ApplicationJSONSite;
    /**
     * Status of the common area phone. It can be either `online` or `offline`.
     */
    status?: string;
}
export declare class GetACommonAreaPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Common Area Phone details returned successfully.
     */
    getACommonAreaPhone200ApplicationJSONObject?: GetACommonAreaPhone200ApplicationJSON;
}
