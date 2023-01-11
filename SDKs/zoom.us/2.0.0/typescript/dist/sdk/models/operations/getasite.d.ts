import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetASitePathParams extends SpeakeasyBase {
    siteId: string;
}
export declare class GetASiteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Site country
**/
export declare class GetASite200ApplicationJsonCountry extends SpeakeasyBase {
    code?: string;
    name?: string;
}
/**
 * [Main Auto Receptionist](https://support.zoom.us/hc/en-us/articles/360021121312#h_bc7ff1d5-0e6c-40cd-b889-62010cb98c57) for each site.
**/
export declare class GetASite200ApplicationJsonMainAutoReceptionist extends SpeakeasyBase {
    extensionId?: string;
    extensionNumber?: number;
    id?: string;
    name?: string;
}
/**
 * Short extension of the phone site.
**/
export declare class GetASite200ApplicationJsonShortExtension extends SpeakeasyBase {
    length?: number;
}
export declare class GetASite200ApplicationJson extends SpeakeasyBase {
    country?: GetASite200ApplicationJsonCountry;
    id?: string;
    mainAutoReceptionist?: GetASite200ApplicationJsonMainAutoReceptionist;
    name?: string;
    shortExtension?: GetASite200ApplicationJsonShortExtension;
    siteCode?: number;
}
export declare class GetASiteRequest extends SpeakeasyBase {
    pathParams: GetASitePathParams;
    security: GetASiteSecurity;
}
export declare class GetASiteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getASite200ApplicationJSONObject?: GetASite200ApplicationJson;
}
