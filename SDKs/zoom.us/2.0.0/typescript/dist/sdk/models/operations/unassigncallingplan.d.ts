import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnassignCallingPlanPathParams extends SpeakeasyBase {
    type: string;
    userId: string;
}
export declare class UnassignCallingPlanSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UnassignCallingPlanRequest extends SpeakeasyBase {
    pathParams: UnassignCallingPlanPathParams;
    security: UnassignCallingPlanSecurity;
}
export declare class UnassignCallingPlanResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    unassignCallingPlan204ApplicationJSONAny?: any;
}
