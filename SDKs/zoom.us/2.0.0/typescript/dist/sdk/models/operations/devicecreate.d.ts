import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeviceCreateTheH323SipDeviceObjectEncryptionEnum {
    Auto = "auto",
    Yes = "yes",
    No = "no"
}
export declare enum DeviceCreateTheH323SipDeviceObjectProtocolEnum {
    H323 = "H.323",
    Sip = "SIP"
}
/**
 * The H.323/SIP device object.
**/
export declare class DeviceCreateTheH323SipDeviceObject extends SpeakeasyBase {
    encryption: DeviceCreateTheH323SipDeviceObjectEncryptionEnum;
    ip: string;
    name: string;
    protocol: DeviceCreateTheH323SipDeviceObjectProtocolEnum;
}
export declare class DeviceCreateRequests extends SpeakeasyBase {
    theH323SIPDeviceObject?: DeviceCreateTheH323SipDeviceObject;
    theH323SIPDeviceObject1?: DeviceCreateTheH323SipDeviceObject;
}
export declare class DeviceCreateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * The H.323/SIP device object.
**/
export declare class DeviceCreateTheH323SipDeviceObject1 extends SpeakeasyBase {
    encryption: DeviceCreateTheH323SipDeviceObjectEncryptionEnum;
    id?: string;
    ip: string;
    name: string;
    protocol: DeviceCreateTheH323SipDeviceObjectProtocolEnum;
}
export declare class DeviceCreateRequest extends SpeakeasyBase {
    request: DeviceCreateRequests;
    security: DeviceCreateSecurity;
}
export declare class DeviceCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    theH323SIPDeviceObject?: DeviceCreateTheH323SipDeviceObject1;
}
