import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrackingSourcesPathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class GetTrackingSourcesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetTrackingSources200ApplicationJsonTrackingSources extends SpeakeasyBase {
    id?: string;
    registrationCount?: number;
    sourceName?: string;
    trackingUrl?: string;
    visitorCount?: number;
}
export declare class GetTrackingSources200ApplicationJson extends SpeakeasyBase {
    totalRecords?: number;
    trackingSources?: GetTrackingSources200ApplicationJsonTrackingSources[];
}
export declare class GetTrackingSourcesRequest extends SpeakeasyBase {
    pathParams: GetTrackingSourcesPathParams;
    security: GetTrackingSourcesSecurity;
}
export declare class GetTrackingSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getTrackingSources200ApplicationJSONObject?: GetTrackingSources200ApplicationJson;
}
