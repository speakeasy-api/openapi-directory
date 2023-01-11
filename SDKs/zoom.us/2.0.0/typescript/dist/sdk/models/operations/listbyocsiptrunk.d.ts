import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListByocsipTrunkQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListByocsipTrunkSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListByocsipTrunk200ApplicationJsonByocSipTrunk extends SpeakeasyBase {
    carrier?: string;
    carrierAccount?: string;
    id?: string;
    name?: string;
    region?: string;
    sbcLabel?: string;
}
export declare class ListByocsipTrunk200ApplicationJson extends SpeakeasyBase {
    byocSipTrunk?: ListByocsipTrunk200ApplicationJsonByocSipTrunk[];
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ListByocsipTrunkRequest extends SpeakeasyBase {
    queryParams: ListByocsipTrunkQueryParams;
    security: ListByocsipTrunkSecurity;
}
export declare class ListByocsipTrunkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listBYOCSIPTrunk200ApplicationJSONObject?: ListByocsipTrunk200ApplicationJson;
}
