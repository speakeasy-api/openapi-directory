import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveAChannelMemberPathParams extends SpeakeasyBase {
    channelId: string;
    memberId: string;
    userId: string;
}
export declare class RemoveAChannelMemberSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class RemoveAChannelMemberRequest extends SpeakeasyBase {
    pathParams: RemoveAChannelMemberPathParams;
    security: RemoveAChannelMemberSecurity;
}
export declare class RemoveAChannelMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    removeAChannelMember204ApplicationJSONAny?: any;
}
