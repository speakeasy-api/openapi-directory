import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnassignAllMembersPathParams extends SpeakeasyBase {
    callQueueId: string;
}
export declare class UnassignAllMembersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UnassignAllMembersRequest extends SpeakeasyBase {
    pathParams: UnassignAllMembersPathParams;
    security: UnassignAllMembersSecurity;
}
export declare class UnassignAllMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    unassignAllMembers204ApplicationJSONAny?: any;
}
