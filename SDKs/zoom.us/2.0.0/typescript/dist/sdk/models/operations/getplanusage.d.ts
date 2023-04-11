import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPlanUsageSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetPlanUsageRequest extends SpeakeasyBase {
    accountId: string;
}
export declare class GetPlanUsage200ApplicationXMLPlanBase extends SpeakeasyBase {
    /**
     * Number of hosts under the base plan.
     */
    hosts?: number;
    /**
     * Type of the base plan.
     */
    type?: string;
    /**
     * Total number of usage of this plan.
     */
    usage?: number;
}
export declare class GetPlanUsage200ApplicationXMLPlanLargeMeeting extends SpeakeasyBase {
    /**
     * Number of hosts in this plan.
     */
    hosts?: number;
    /**
     * Large meeting Plan Type
     */
    type?: string;
    /**
     * Number of usages for this account plan.
     */
    usage?: number;
}
/**
 * Recording Plan
 */
export declare class GetPlanUsage200ApplicationXMLPlanRecording extends SpeakeasyBase {
    /**
     * Recording free storage.
     */
    freeStorage?: string;
    /**
     * Amount of free storage used.
     */
    freeStorageUsage?: string;
    /**
     * Recording plan storage.
     */
    planStorage?: string;
    planStorageExceed?: string;
    /**
     * Recording storage usage.
     */
    planStorageUsage?: string;
    /**
     * Recording plan type.
     */
    type?: string;
}
/**
 * [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
 */
export declare class GetPlanUsage200ApplicationXMLPlanUnited extends SpeakeasyBase {
    /**
     * Number of licenses purchased.
     */
    hosts?: number;
    /**
     * Name of the plan.
     */
    name?: string;
    /**
     * Plan [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-united-plans).
     */
    type?: string;
    /**
     * Number of licenses that are already being used.
     */
    usage?: number;
}
export declare class GetPlanUsage200ApplicationXMLPlanWebinar extends SpeakeasyBase {
    /**
     * The number of hosts in this plan.
     */
    hosts?: number;
    /**
     * The type of Webinar plan for the account.
     */
    type?: string;
    /**
     * The total number of plan usage.
     */
    usage?: number;
}
export declare class GetPlanUsage200ApplicationXMLPlanZoomRooms extends SpeakeasyBase {
    /**
     * The number of hosts in this plan.
     */
    hosts?: number;
    /**
     * THe plan type for Zoom room plan.
     */
    type?: string;
    /**
     * The total number of usage for this plan.
     */
    usage?: number;
}
/**
 * **HTTP Status Code:** `200` <br>
 *
 * @remarks
 * Plan Usage returned.<br>
 */
export declare class GetPlanUsage200ApplicationXML extends SpeakeasyBase {
    /**
     * The base plan subscribed for the sub account.
     */
    planBase?: GetPlanUsage200ApplicationXMLPlanBase[];
    /**
     * Large Meeting Plan
     */
    planLargeMeeting?: GetPlanUsage200ApplicationXMLPlanLargeMeeting[];
    /**
     * Recording Plan
     */
    planRecording?: GetPlanUsage200ApplicationXMLPlanRecording;
    /**
     * [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
     */
    planUnited?: GetPlanUsage200ApplicationXMLPlanUnited;
    /**
     * Webinar Plan
     */
    planWebinar?: GetPlanUsage200ApplicationXMLPlanWebinar[];
    /**
     * Zoom Rooms Plan
     */
    planZoomRooms?: GetPlanUsage200ApplicationXMLPlanZoomRooms[];
}
export declare class GetPlanUsage200ApplicationJSONPlanBase extends SpeakeasyBase {
    /**
     * Number of hosts under the base plan.
     */
    hosts?: number;
    /**
     * Type of the base plan.
     */
    type?: string;
    /**
     * Total number of usage of this plan.
     */
    usage?: number;
}
export declare class GetPlanUsage200ApplicationJSONPlanLargeMeeting extends SpeakeasyBase {
    /**
     * Number of hosts in this plan.
     */
    hosts?: number;
    /**
     * Large meeting Plan Type
     */
    type?: string;
    /**
     * Number of usages for this account plan.
     */
    usage?: number;
}
/**
 * Recording Plan
 */
export declare class GetPlanUsage200ApplicationJSONPlanRecording extends SpeakeasyBase {
    /**
     * Recording free storage.
     */
    freeStorage?: string;
    /**
     * Amount of free storage used.
     */
    freeStorageUsage?: string;
    /**
     * Recording plan storage.
     */
    planStorage?: string;
    planStorageExceed?: string;
    /**
     * Recording storage usage.
     */
    planStorageUsage?: string;
    /**
     * Recording plan type.
     */
    type?: string;
}
/**
 * [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
 */
export declare class GetPlanUsage200ApplicationJSONPlanUnited extends SpeakeasyBase {
    /**
     * Number of licenses purchased.
     */
    hosts?: number;
    /**
     * Name of the plan.
     */
    name?: string;
    /**
     * Plan [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-united-plans).
     */
    type?: string;
    /**
     * Number of licenses that are already being used.
     */
    usage?: number;
}
export declare class GetPlanUsage200ApplicationJSONPlanWebinar extends SpeakeasyBase {
    /**
     * The number of hosts in this plan.
     */
    hosts?: number;
    /**
     * The type of Webinar plan for the account.
     */
    type?: string;
    /**
     * The total number of plan usage.
     */
    usage?: number;
}
export declare class GetPlanUsage200ApplicationJSONPlanZoomRooms extends SpeakeasyBase {
    /**
     * The number of hosts in this plan.
     */
    hosts?: number;
    /**
     * THe plan type for Zoom room plan.
     */
    type?: string;
    /**
     * The total number of usage for this plan.
     */
    usage?: number;
}
/**
 * **HTTP Status Code:** `200` <br>
 *
 * @remarks
 * Plan Usage returned.<br>
 */
export declare class GetPlanUsage200ApplicationJSON extends SpeakeasyBase {
    /**
     * The base plan subscribed for the sub account.
     */
    planBase?: GetPlanUsage200ApplicationJSONPlanBase[];
    /**
     * Large Meeting Plan
     */
    planLargeMeeting?: GetPlanUsage200ApplicationJSONPlanLargeMeeting[];
    /**
     * Recording Plan
     */
    planRecording?: GetPlanUsage200ApplicationJSONPlanRecording;
    /**
     * [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
     */
    planUnited?: GetPlanUsage200ApplicationJSONPlanUnited;
    /**
     * Webinar Plan
     */
    planWebinar?: GetPlanUsage200ApplicationJSONPlanWebinar[];
    /**
     * Zoom Rooms Plan
     */
    planZoomRooms?: GetPlanUsage200ApplicationJSONPlanZoomRooms[];
}
export declare class GetPlanUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` <br>
     *
     * @remarks
     * Plan Usage returned.<br>
     */
    getPlanUsage200ApplicationJSONObject?: GetPlanUsage200ApplicationJSON;
}
