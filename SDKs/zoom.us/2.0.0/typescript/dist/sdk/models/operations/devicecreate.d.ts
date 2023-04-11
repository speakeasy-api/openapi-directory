import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeviceCreateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
 */
export declare enum DeviceCreateTheH323SIPDeviceObjectEncryptionEnum {
    Auto = "auto",
    Yes = "yes",
    No = "no"
}
/**
 * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
 */
export declare enum DeviceCreateTheH323SIPDeviceObjectProtocolEnum {
    H323 = "H.323",
    Sip = "SIP"
}
/**
 * The H.323/SIP device object.
 */
export declare class DeviceCreateTheH323SIPDeviceObject extends SpeakeasyBase {
    /**
     * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
     */
    encryption: DeviceCreateTheH323SIPDeviceObjectEncryptionEnum;
    /**
     * Device IP.
     */
    ip: string;
    /**
     * Device name.
     */
    name: string;
    /**
     * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
     */
    protocol: DeviceCreateTheH323SIPDeviceObjectProtocolEnum;
}
/**
 * The H.323/SIP device object.
 */
export declare class DeviceCreateTheH323SIPDeviceObject1 extends SpeakeasyBase {
    /**
     * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
     */
    encryption: DeviceCreateTheH323SIPDeviceObjectEncryptionEnum;
    /**
     * Device ID.
     */
    id?: string;
    /**
     * Device IP.
     */
    ip: string;
    /**
     * Device name.
     */
    name: string;
    /**
     * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
     */
    protocol: DeviceCreateTheH323SIPDeviceObjectProtocolEnum;
}
export declare class DeviceCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * H.323/SIP device created.
     */
    theH323SIPDeviceObject?: DeviceCreateTheH323SIPDeviceObject1;
}
