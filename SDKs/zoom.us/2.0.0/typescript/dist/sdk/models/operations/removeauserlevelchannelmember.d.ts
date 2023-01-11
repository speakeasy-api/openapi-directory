import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveAUserLevelChannelMemberPathParams extends SpeakeasyBase {
    channelId: string;
    memberId: string;
}
export declare class RemoveAUserLevelChannelMemberSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RemoveAUserLevelChannelMemberRequest extends SpeakeasyBase {
    pathParams: RemoveAUserLevelChannelMemberPathParams;
    security: RemoveAUserLevelChannelMemberSecurity;
}
export declare class RemoveAUserLevelChannelMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    removeAUserLevelChannelMember204ApplicationJSONAny?: any;
}
