import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePhoneSitePathParams extends SpeakeasyBase {
    siteId: string;
}
export declare class DeletePhoneSiteQueryParams extends SpeakeasyBase {
    transferSiteId: string;
}
export declare class DeletePhoneSiteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeletePhoneSiteRequest extends SpeakeasyBase {
    pathParams: DeletePhoneSitePathParams;
    queryParams: DeletePhoneSiteQueryParams;
    security: DeletePhoneSiteSecurity;
}
export declare class DeletePhoneSiteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deletePhoneSite204ApplicationJSONAny?: any;
}
