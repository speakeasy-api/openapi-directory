import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateSIPPhoneSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum UpdateSIPPhoneApplicationJSONTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum UpdateSIPPhoneApplicationJSONTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum UpdateSIPPhoneApplicationJSONTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare class UpdateSIPPhoneApplicationJSON extends SpeakeasyBase {
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
     * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server.
     */
    proxyServer2: string;
    /**
     * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server.
     */
    proxyServer3: string;
    /**
     * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
     */
    registerServer: string;
    /**
     * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
     */
    registerServer2: string;
    /**
     * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
     */
    registerServer3: string;
    /**
     * The number of minutes after which the SIP registration of the Zoom client user will expire, and the client will auto register to the SIP server.
     */
    registrationExpireTime?: number;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol?: UpdateSIPPhoneApplicationJSONTransportProtocolEnum;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol2?: UpdateSIPPhoneApplicationJSONTransportProtocol2Enum;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol3?: UpdateSIPPhoneApplicationJSONTransportProtocol3Enum;
    /**
     * The phone number associated with the user in the SIP account.
     */
    userName: string;
    /**
     * The number to dial for checking voicemail.
     */
    voiceMail: string;
}
export declare class UpdateSIPPhoneRequest extends SpeakeasyBase {
    requestBody?: UpdateSIPPhoneApplicationJSON;
    /**
     * Unique Identifier of the SIP Phone. This can be retrieved from the List SIP Phones API.
     */
    phoneId: string;
}
export declare class UpdateSIPPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * SIP Phone information updated successfully.
     *
     */
    updateSIPPhone204ApplicationJSONObject?: Record<string, any>;
}
