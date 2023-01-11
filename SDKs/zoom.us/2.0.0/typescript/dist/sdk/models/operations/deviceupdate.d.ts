import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeviceUpdatePathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare enum DeviceUpdateTheH323SipDeviceObjectEncryptionEnum {
    Auto = "auto",
    Yes = "yes",
    No = "no"
}
export declare enum DeviceUpdateTheH323SipDeviceObjectProtocolEnum {
    H323 = "H.323",
    Sip = "SIP"
}
/**
 * The H.323/SIP device object.
**/
export declare class DeviceUpdateTheH323SipDeviceObject extends SpeakeasyBase {
    encryption: DeviceUpdateTheH323SipDeviceObjectEncryptionEnum;
    ip: string;
    name: string;
    protocol: DeviceUpdateTheH323SipDeviceObjectProtocolEnum;
}
export declare class DeviceUpdateRequests extends SpeakeasyBase {
    theH323SIPDeviceObject?: DeviceUpdateTheH323SipDeviceObject;
    theH323SIPDeviceObject1?: DeviceUpdateTheH323SipDeviceObject;
}
export declare class DeviceUpdateRequest extends SpeakeasyBase {
    pathParams: DeviceUpdatePathParams;
    request: DeviceUpdateRequests;
}
export declare class DeviceUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
