import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSipPhonesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListSipPhonesRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     *
     * @remarks
     * **Deprecated** - This field has been deprecated and we will stop supporting it completely in a future release. Please use "next_page_token" for pagination instead of this field.
     *
     * The page number of the current page in the returned records.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * User name or email address of a user. If this parameter is provided, only the SIP phone system integration enabled for that specific user will be returned. Otherwise, all SIP phones on an account will be returned.
     */
    searchKey?: string;
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum ListSipPhones200ApplicationXMLPhonesTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum ListSipPhones200ApplicationXMLPhonesTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum ListSipPhones200ApplicationXMLPhonesTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare class ListSipPhones200ApplicationXMLPhones extends SpeakeasyBase {
    /**
     * Authorization name of the user  registered for SIP Phone.
     */
    authorizationName?: string;
    /**
     * The name or IP address of your provider’s SIP domain. (example: CDC.WEB).
     *
     * @remarks
     *
     */
    domain?: string;
    /**
     * Unique Identifier of the SIP Phone.
     */
    id?: string;
    /**
     * The password generated for the user in the SIP account.
     *
     * @remarks
     *
     */
    password?: string;
    /**
     * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server, or empty.
     */
    proxyServer?: string;
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
    registerServer?: string;
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
    transportProtocol?: ListSipPhones200ApplicationXMLPhonesTransportProtocolEnum;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol2?: ListSipPhones200ApplicationXMLPhonesTransportProtocol2Enum;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol3?: ListSipPhones200ApplicationXMLPhonesTransportProtocol3Enum;
    /**
     * The email address of the user to associate with the SIP Phone. Can add [.win, .mac, .android, .ipad, .iphone, .linux, .pc, .mobile, .pad] at the end of the email (ex. user@test.com.mac) to add accounts for different platforms for the same user.
     */
    userEmail?: string;
    /**
     * The phone number associated with the user in the SIP account.
     */
    userName?: string;
    /**
     * The number to dial for checking voicemail.
     */
    voiceMail?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * SIP Phones listed successfully.
 *
 * **Error Code:** `200`<br>
 * Permission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.
 */
export declare class ListSipPhones200ApplicationXML extends SpeakeasyBase {
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * SIP phones object.
     */
    phones?: ListSipPhones200ApplicationXMLPhones[];
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
/**
 * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
 */
export declare enum ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare class ListSipPhones200ApplicationJSONPhones extends SpeakeasyBase {
    /**
     * Authorization name of the user  registered for SIP Phone.
     */
    authorizationName?: string;
    /**
     * The name or IP address of your provider’s SIP domain. (example: CDC.WEB).
     *
     * @remarks
     *
     */
    domain?: string;
    /**
     * Unique Identifier of the SIP Phone.
     */
    id?: string;
    /**
     * The password generated for the user in the SIP account.
     *
     * @remarks
     *
     */
    password?: string;
    /**
     * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server, or empty.
     */
    proxyServer?: string;
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
    registerServer?: string;
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
    transportProtocol?: ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol2?: ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum;
    /**
     * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
     */
    transportProtocol3?: ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum;
    /**
     * The email address of the user to associate with the SIP Phone. Can add [.win, .mac, .android, .ipad, .iphone, .linux, .pc, .mobile, .pad] at the end of the email (ex. user@test.com.mac) to add accounts for different platforms for the same user.
     */
    userEmail?: string;
    /**
     * The phone number associated with the user in the SIP account.
     */
    userName?: string;
    /**
     * The number to dial for checking voicemail.
     */
    voiceMail?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * SIP Phones listed successfully.
 *
 * **Error Code:** `200`<br>
 * Permission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.
 */
export declare class ListSipPhones200ApplicationJSON extends SpeakeasyBase {
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * SIP phones object.
     */
    phones?: ListSipPhones200ApplicationJSONPhones[];
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class ListSipPhonesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * SIP Phones listed successfully.
     *
     * **Error Code:** `200`<br>
     * Permission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.
     */
    listSipPhones200ApplicationJSONObject?: ListSipPhones200ApplicationJSON;
}
