import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAZoomRoomPathParams extends SpeakeasyBase {
    roomId: string;
}
export declare class DeleteAZoomRoomSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteAZoomRoomRequest extends SpeakeasyBase {
    pathParams: DeleteAZoomRoomPathParams;
    security: DeleteAZoomRoomSecurity;
}
export declare class DeleteAZoomRoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteAZoomRoom204ApplicationJSONObject?: Record<string, any>;
}
