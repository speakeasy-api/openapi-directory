import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnassignAPhoneNumCallQueuePathParams extends SpeakeasyBase {
    callQueueId: string;
}
export declare class UnassignAPhoneNumCallQueueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UnassignAPhoneNumCallQueueRequest extends SpeakeasyBase {
    pathParams: UnassignAPhoneNumCallQueuePathParams;
    security: UnassignAPhoneNumCallQueueSecurity;
}
export declare class UnassignAPhoneNumCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    unassignAPhoneNumCallQueue204ApplicationJSONObject?: Record<string, any>;
}
