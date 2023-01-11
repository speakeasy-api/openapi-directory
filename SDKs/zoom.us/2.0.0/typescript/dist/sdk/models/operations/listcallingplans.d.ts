import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCallingPlansSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ListCallingPlans200ApplicationJsonCallingPlans extends SpeakeasyBase {
    assigned?: number;
    available?: number;
    name?: string;
    subscribed?: number;
    type?: number;
}
export declare class ListCallingPlans200ApplicationJson extends SpeakeasyBase {
    callingPlans?: ListCallingPlans200ApplicationJsonCallingPlans[];
}
export declare class ListCallingPlansRequest extends SpeakeasyBase {
    security: ListCallingPlansSecurity;
}
export declare class ListCallingPlansResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listCallingPlans200ApplicationJSONObject?: ListCallingPlans200ApplicationJson;
}
