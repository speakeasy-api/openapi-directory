import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSipPhonePathParams extends SpeakeasyBase {
    phoneId: string;
}
export declare enum UpdateSipPhoneApplicationJsonTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum UpdateSipPhoneApplicationJsonTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum UpdateSipPhoneApplicationJsonTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare class UpdateSipPhoneApplicationJson extends SpeakeasyBase {
    authorizationName: string;
    domain: string;
    password: string;
    proxyServer: string;
    proxyServer2: string;
    proxyServer3: string;
    registerServer: string;
    registerServer2: string;
    registerServer3: string;
    registrationExpireTime?: number;
    transportProtocol?: UpdateSipPhoneApplicationJsonTransportProtocolEnum;
    transportProtocol2?: UpdateSipPhoneApplicationJsonTransportProtocol2Enum;
    transportProtocol3?: UpdateSipPhoneApplicationJsonTransportProtocol3Enum;
    userName: string;
    voiceMail: string;
}
export declare enum UpdateSipPhoneMultipartFormDataTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum UpdateSipPhoneMultipartFormDataTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum UpdateSipPhoneMultipartFormDataTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare class UpdateSipPhoneMultipartFormData extends SpeakeasyBase {
    authorizationName: string;
    domain: string;
    password: string;
    proxyServer: string;
    proxyServer2: string;
    proxyServer3: string;
    registerServer: string;
    registerServer2: string;
    registerServer3: string;
    registrationExpireTime?: number;
    transportProtocol?: UpdateSipPhoneMultipartFormDataTransportProtocolEnum;
    transportProtocol2?: UpdateSipPhoneMultipartFormDataTransportProtocol2Enum;
    transportProtocol3?: UpdateSipPhoneMultipartFormDataTransportProtocol3Enum;
    userName: string;
    voiceMail: string;
}
export declare class UpdateSipPhoneRequests extends SpeakeasyBase {
    object?: UpdateSipPhoneApplicationJson;
    object1?: UpdateSipPhoneMultipartFormData;
}
export declare class UpdateSipPhoneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateSipPhoneRequest extends SpeakeasyBase {
    pathParams: UpdateSipPhonePathParams;
    request?: UpdateSipPhoneRequests;
    security: UpdateSipPhoneSecurity;
}
export declare class UpdateSipPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSIPPhone204ApplicationJSONObject?: Record<string, any>;
}
