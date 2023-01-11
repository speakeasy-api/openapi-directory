import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteABlockedListPathParams extends SpeakeasyBase {
    blockedListId: string;
}
export declare class DeleteABlockedListSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteABlockedListRequest extends SpeakeasyBase {
    pathParams: DeleteABlockedListPathParams;
    security: DeleteABlockedListSecurity;
}
export declare class DeleteABlockedListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteABlockedList204ApplicationJSONAny?: any;
}
