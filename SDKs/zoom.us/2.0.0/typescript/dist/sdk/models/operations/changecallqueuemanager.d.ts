import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeCallQueueManagerPathParams extends SpeakeasyBase {
    callQueueId: string;
}
export declare class ChangeCallQueueManagerApplicationJson extends SpeakeasyBase {
    memberId?: string;
}
export declare class ChangeCallQueueManagerMultipartFormData extends SpeakeasyBase {
    memberId?: string;
}
export declare class ChangeCallQueueManagerRequests extends SpeakeasyBase {
    object?: ChangeCallQueueManagerApplicationJson;
    object1?: ChangeCallQueueManagerMultipartFormData;
}
export declare class ChangeCallQueueManagerSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ChangeCallQueueManagerRequest extends SpeakeasyBase {
    pathParams: ChangeCallQueueManagerPathParams;
    request?: ChangeCallQueueManagerRequests;
    security: ChangeCallQueueManagerSecurity;
}
export declare class ChangeCallQueueManagerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    changeCallQueueManager204ApplicationJSONAny?: any;
}
