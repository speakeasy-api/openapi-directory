import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlanUsagePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetPlanUsageSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class GetPlanUsage200ApplicationJsonPlanBase extends SpeakeasyBase {
    hosts?: number;
    type?: string;
    usage?: number;
}
export declare class GetPlanUsage200ApplicationJsonPlanLargeMeeting extends SpeakeasyBase {
    hosts?: number;
    type?: string;
    usage?: number;
}
/**
 * Recording Plan
**/
export declare class GetPlanUsage200ApplicationJsonPlanRecording extends SpeakeasyBase {
    freeStorage?: string;
    freeStorageUsage?: string;
    planStorage?: string;
    planStorageExceed?: string;
    planStorageUsage?: string;
    type?: string;
}
/**
 * [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
**/
export declare class GetPlanUsage200ApplicationJsonPlanUnited extends SpeakeasyBase {
    hosts?: number;
    name?: string;
    type?: string;
    usage?: number;
}
export declare class GetPlanUsage200ApplicationJsonPlanWebinar extends SpeakeasyBase {
    hosts?: number;
    type?: string;
    usage?: number;
}
export declare class GetPlanUsage200ApplicationJsonPlanZoomRooms extends SpeakeasyBase {
    hosts?: number;
    type?: string;
    usage?: number;
}
export declare class GetPlanUsage200ApplicationJson extends SpeakeasyBase {
    planBase?: GetPlanUsage200ApplicationJsonPlanBase[];
    planLargeMeeting?: GetPlanUsage200ApplicationJsonPlanLargeMeeting[];
    planRecording?: GetPlanUsage200ApplicationJsonPlanRecording;
    planUnited?: GetPlanUsage200ApplicationJsonPlanUnited;
    planWebinar?: GetPlanUsage200ApplicationJsonPlanWebinar[];
    planZoomRooms?: GetPlanUsage200ApplicationJsonPlanZoomRooms[];
}
export declare class GetPlanUsageRequest extends SpeakeasyBase {
    pathParams: GetPlanUsagePathParams;
    security: GetPlanUsageSecurity;
}
export declare class GetPlanUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getPlanUsage200ApplicationJSONObject?: GetPlanUsage200ApplicationJson;
}
