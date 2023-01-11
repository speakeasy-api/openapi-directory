import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSiteDetailsPathParams extends SpeakeasyBase {
    siteId: string;
}
export declare class UpdateSiteDetailsApplicationJson extends SpeakeasyBase {
    name?: string;
    siteCode?: number;
}
export declare class UpdateSiteDetailsMultipartFormData extends SpeakeasyBase {
    name?: string;
    siteCode?: number;
}
export declare class UpdateSiteDetailsRequests extends SpeakeasyBase {
    object?: UpdateSiteDetailsApplicationJson;
    object1?: UpdateSiteDetailsMultipartFormData;
}
export declare class UpdateSiteDetailsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateSiteDetailsRequest extends SpeakeasyBase {
    pathParams: UpdateSiteDetailsPathParams;
    request?: UpdateSiteDetailsRequests;
    security: UpdateSiteDetailsSecurity;
}
export declare class UpdateSiteDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSiteDetails204ApplicationJSONAny?: any;
}
