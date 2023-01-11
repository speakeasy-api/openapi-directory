import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnassignPhoneNumberPathParams extends SpeakeasyBase {
    phoneNumberId: string;
    userId: string;
}
export declare class UnassignPhoneNumberSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UnassignPhoneNumberRequest extends SpeakeasyBase {
    pathParams: UnassignPhoneNumberPathParams;
    security: UnassignPhoneNumberSecurity;
}
export declare class UnassignPhoneNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    unassignPhoneNumber204ApplicationJSONAny?: any;
}
