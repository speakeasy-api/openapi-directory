import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssignCallingPlanSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AssignCallingPlanApplicationJSONCallingPlans extends SpeakeasyBase {
    /**
     * [Type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) of the calling plan.
     */
    type?: string;
}
export declare class AssignCallingPlanApplicationJSON extends SpeakeasyBase {
    callingPlans?: AssignCallingPlanApplicationJSONCallingPlans[];
}
export declare class AssignCallingPlanRequest extends SpeakeasyBase {
    requestBody?: AssignCallingPlanApplicationJSON;
    userId: string;
}
export declare class AssignCallingPlanResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status code:** `200`<br>
     *
     * @remarks
     * Calling plan assigned successfully.
     */
    assignCallingPlan200ApplicationJSONAny?: any;
}
