import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSipTrunkNumbersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListSipTrunkNumbers200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
    country?: string;
    number?: string;
}
export declare class ListSipTrunkNumbers200ApplicationJson extends SpeakeasyBase {
    phoneNumbers?: ListSipTrunkNumbers200ApplicationJsonPhoneNumbers[];
    totalRecords?: number;
}
export declare class ListSipTrunkNumbersRequest extends SpeakeasyBase {
    security: ListSipTrunkNumbersSecurity;
}
export declare class ListSipTrunkNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listSipTrunkNumbers200ApplicationJSONObject?: ListSipTrunkNumbers200ApplicationJson;
}
