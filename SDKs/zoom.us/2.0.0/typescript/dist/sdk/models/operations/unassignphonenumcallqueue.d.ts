import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnAssignPhoneNumCallQueuePathParams extends SpeakeasyBase {
    callQueueId: string;
    phoneNumberId: string;
}
export declare class UnAssignPhoneNumCallQueueSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UnAssignPhoneNumCallQueueRequest extends SpeakeasyBase {
    pathParams: UnAssignPhoneNumCallQueuePathParams;
    security: UnAssignPhoneNumCallQueueSecurity;
}
export declare class UnAssignPhoneNumCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    unAssignPhoneNumCallQueue204ApplicationJSONObject?: Record<string, any>;
}
