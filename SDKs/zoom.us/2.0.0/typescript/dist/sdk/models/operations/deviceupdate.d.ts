import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
 */
export declare enum DeviceUpdateTheH323SIPDeviceObjectEncryptionEnum {
    Auto = "auto",
    Yes = "yes",
    No = "no"
}
/**
 * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
 */
export declare enum DeviceUpdateTheH323SIPDeviceObjectProtocolEnum {
    H323 = "H.323",
    Sip = "SIP"
}
/**
 * The H.323/SIP device object.
 */
export declare class DeviceUpdateTheH323SIPDeviceObject extends SpeakeasyBase {
    /**
     * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
     */
    encryption: DeviceUpdateTheH323SIPDeviceObjectEncryptionEnum;
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
    protocol: DeviceUpdateTheH323SIPDeviceObjectProtocolEnum;
}
export declare class DeviceUpdateRequest extends SpeakeasyBase {
    requestBody: DeviceUpdateTheH323SIPDeviceObject;
    /**
     * The device ID.
     */
    deviceId: string;
}
export declare class DeviceUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
