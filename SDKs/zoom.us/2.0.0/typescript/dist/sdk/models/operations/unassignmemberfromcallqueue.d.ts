import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnassignMemberFromCallQueuePathParams extends SpeakeasyBase {
    callQueueId: string;
    memberId: string;
}
export declare class UnassignMemberFromCallQueueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UnassignMemberFromCallQueueRequest extends SpeakeasyBase {
    pathParams: UnassignMemberFromCallQueuePathParams;
    security: UnassignMemberFromCallQueueSecurity;
}
export declare class UnassignMemberFromCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    unassignMemberFromCallQueue204ApplicationJSONAny?: any;
}
