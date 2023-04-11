import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateSIPPhoneSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum CreateSIPPhoneApplicationJSONTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum CreateSIPPhoneApplicationJSONTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum CreateSIPPhoneApplicationJSONTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare class CreateSIPPhoneApplicationJSON extends SpeakeasyBase {
    /**
     * Authorization name of the user  registered for SIP Phone.
     */
    authorizationName: string;
    /**
     * The name or IP address of your provider’s SIP domain. (example: CDC.WEB).
     */
    domain: string;
    /**
     * The password generated for the user in the SIP account.
     */
    password: string;
    /**
     * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server.
     */
    proxyServer: string;
    /**
     * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server, or empty.
     */
    proxyServer2?: string;
    /**
     * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server, or empty.
     */
    proxyServer3?: string;
    /**
     * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
     */
    registerServer: string;
    /**
     * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
     */
    registerServer2?: string;
    /**
     * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
     */
    registerServer3?: string;
    /**
     * The number of minutes after which the SIP registration of the Zoom client user will expire, and the client will auto register to the SIP server.
     */
    registrationExpireTime?: number;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol?: CreateSIPPhoneApplicationJSONTransportProtocolEnum;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol2?: CreateSIPPhoneApplicationJSONTransportProtocol2Enum;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol3?: CreateSIPPhoneApplicationJSONTransportProtocol3Enum;
    /**
     * The email address of the user to associate with the SIP Phone. Can add [.win, .mac, .android, .ipad, .iphone, .linux, .pc, .mobile, .pad] at the end of the email (ex. user@test.com.mac) to add accounts for different platforms for the same user.
     */
    userEmail: string;
    /**
     * The phone number associated with the user in the SIP account.
     */
    userName: string;
    /**
     * The number to dial for checking voicemail.
     */
    voiceMail: string;
}
export declare class CreateSIPPhoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
