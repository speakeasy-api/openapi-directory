import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignCallingPlanPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class AssignCallingPlanApplicationJsonCallingPlans extends SpeakeasyBase {
    type?: string;
}
export declare class AssignCallingPlanApplicationJson extends SpeakeasyBase {
    callingPlans?: AssignCallingPlanApplicationJsonCallingPlans[];
}
export declare class AssignCallingPlanMultipartFormDataCallingPlans extends SpeakeasyBase {
    type?: string;
}
export declare class AssignCallingPlanMultipartFormData1 extends SpeakeasyBase {
    callingPlans?: AssignCallingPlanMultipartFormDataCallingPlans[];
}
export declare class AssignCallingPlanRequests extends SpeakeasyBase {
    object?: AssignCallingPlanApplicationJson;
    object1?: AssignCallingPlanMultipartFormData1;
}
export declare class AssignCallingPlanSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AssignCallingPlanRequest extends SpeakeasyBase {
    pathParams: AssignCallingPlanPathParams;
    request?: AssignCallingPlanRequests;
    security: AssignCallingPlanSecurity;
}
export declare class AssignCallingPlanResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    assignCallingPlan200ApplicationJSONAny?: any;
}
