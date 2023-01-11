import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignPhoneNumberPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class AssignPhoneNumberApplicationJsonPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AssignPhoneNumberApplicationJson extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneNumberApplicationJsonPhoneNumbers[];
}
export declare class AssignPhoneNumberMultipartFormDataPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AssignPhoneNumberMultipartFormData1 extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneNumberMultipartFormDataPhoneNumbers[];
}
export declare class AssignPhoneNumberRequests extends SpeakeasyBase {
    object?: AssignPhoneNumberApplicationJson;
    object1?: AssignPhoneNumberMultipartFormData1;
}
export declare class AssignPhoneNumberSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AssignPhoneNumber200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AssignPhoneNumber200ApplicationJson extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneNumber200ApplicationJsonPhoneNumbers[];
}
export declare class AssignPhoneNumberRequest extends SpeakeasyBase {
    pathParams: AssignPhoneNumberPathParams;
    request?: AssignPhoneNumberRequests;
    security: AssignPhoneNumberSecurity;
}
export declare class AssignPhoneNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    assignPhoneNumber200ApplicationJSONObject?: AssignPhoneNumber200ApplicationJson;
}
