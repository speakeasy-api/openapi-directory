import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteACallQueuePathParams extends SpeakeasyBase {
    callQueueId: string;
}
export declare class DeleteACallQueueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteACallQueueRequest extends SpeakeasyBase {
    pathParams: DeleteACallQueuePathParams;
    security: DeleteACallQueueSecurity;
}
export declare class DeleteACallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteACallQueue204ApplicationJSONAny?: any;
}
