import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSipPhoneApplicationJsonTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum CreateSipPhoneApplicationJsonTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum CreateSipPhoneApplicationJsonTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare class CreateSipPhoneApplicationJson extends SpeakeasyBase {
    authorizationName: string;
    domain: string;
    password: string;
    proxyServer: string;
    proxyServer2?: string;
    proxyServer3?: string;
    registerServer: string;
    registerServer2?: string;
    registerServer3?: string;
    registrationExpireTime?: number;
    transportProtocol?: CreateSipPhoneApplicationJsonTransportProtocolEnum;
    transportProtocol2?: CreateSipPhoneApplicationJsonTransportProtocol2Enum;
    transportProtocol3?: CreateSipPhoneApplicationJsonTransportProtocol3Enum;
    userEmail: string;
    userName: string;
    voiceMail: string;
}
export declare enum CreateSipPhoneMultipartFormDataTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum CreateSipPhoneMultipartFormDataTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum CreateSipPhoneMultipartFormDataTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare class CreateSipPhoneMultipartFormData extends SpeakeasyBase {
    authorizationName: string;
    domain: string;
    password: string;
    proxyServer: string;
    proxyServer2?: string;
    proxyServer3?: string;
    registerServer: string;
    registerServer2?: string;
    registerServer3?: string;
    registrationExpireTime?: number;
    transportProtocol?: CreateSipPhoneMultipartFormDataTransportProtocolEnum;
    transportProtocol2?: CreateSipPhoneMultipartFormDataTransportProtocol2Enum;
    transportProtocol3?: CreateSipPhoneMultipartFormDataTransportProtocol3Enum;
    userEmail: string;
    userName: string;
    voiceMail: string;
}
export declare class CreateSipPhoneRequests extends SpeakeasyBase {
    object?: CreateSipPhoneApplicationJson;
    object1?: CreateSipPhoneMultipartFormData;
}
export declare class CreateSipPhoneSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class CreateSipPhoneRequest extends SpeakeasyBase {
    request?: CreateSipPhoneRequests;
    security: CreateSipPhoneSecurity;
}
export declare class CreateSipPhoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
