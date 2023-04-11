import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnassignCallingPlanSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UnassignCallingPlanRequest extends SpeakeasyBase {
    /**
     * The [type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) of the calling plan that was assigned to user. (e.g: The value of type would be "200" for Unlimited US/Canada calling plan.)
     *
     * @remarks
     *
     */
    type: string;
    userId: string;
}
export declare class UnassignCallingPlanResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` <br>
     *
     * @remarks
     * Calling plan unassigned successfully.
     */
    unassignCallingPlan204ApplicationJSONAny?: any;
}
