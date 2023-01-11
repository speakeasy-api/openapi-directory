import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSipPhonesQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageNumber?: number;
    pageSize?: number;
    searchKey?: string;
}
export declare class ListSipPhonesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare enum ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}
export declare class ListSipPhones200ApplicationJsonPhones extends SpeakeasyBase {
    authorizationName?: string;
    domain?: string;
    id?: string;
    password?: string;
    proxyServer?: string;
    proxyServer2?: string;
    proxyServer3?: string;
    registerServer?: string;
    registerServer2?: string;
    registerServer3?: string;
    registrationExpireTime?: number;
    transportProtocol?: ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum;
    transportProtocol2?: ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum;
    transportProtocol3?: ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum;
    userEmail?: string;
    userName?: string;
    voiceMail?: string;
}
export declare class ListSipPhones200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    phones?: ListSipPhones200ApplicationJsonPhones[];
    totalRecords?: number;
}
export declare class ListSipPhonesRequest extends SpeakeasyBase {
    queryParams: ListSipPhonesQueryParams;
    security: ListSipPhonesSecurity;
}
export declare class ListSipPhonesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listSipPhones200ApplicationJSONObject?: ListSipPhones200ApplicationJson;
}
