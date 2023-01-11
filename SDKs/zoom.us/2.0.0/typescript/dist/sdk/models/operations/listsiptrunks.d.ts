import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListSipTrunksPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ListSipTrunks200ApplicationJsonSipTrunks extends SpeakeasyBase {
    dnis?: string;
    id?: string;
    name?: string;
    numberPrefix?: string;
    outboundCallerId?: string;
    sipServerAddress?: string;
}
export declare class ListSipTrunks200ApplicationJson extends SpeakeasyBase {
    sipTrunks?: ListSipTrunks200ApplicationJsonSipTrunks[];
    totalRecords?: number;
}
export declare class ListSipTrunksRequest extends SpeakeasyBase {
    pathParams: ListSipTrunksPathParams;
}
export declare class ListSipTrunksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listSIPTrunks200ApplicationJSONObject?: ListSipTrunks200ApplicationJson;
}
