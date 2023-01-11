import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignPhoneNumbersAutoReceptionistPathParams extends SpeakeasyBase {
    autoReceptionistId: string;
}
export declare class AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AssignPhoneNumbersAutoReceptionistApplicationJson extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers[];
}
export declare class AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AssignPhoneNumbersAutoReceptionistMultipartFormData1 extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers[];
}
export declare class AssignPhoneNumbersAutoReceptionistRequests extends SpeakeasyBase {
    object?: AssignPhoneNumbersAutoReceptionistApplicationJson;
    object1?: AssignPhoneNumbersAutoReceptionistMultipartFormData1;
}
export declare class AssignPhoneNumbersAutoReceptionistSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AssignPhoneNumbersAutoReceptionistRequest extends SpeakeasyBase {
    pathParams: AssignPhoneNumbersAutoReceptionistPathParams;
    request?: AssignPhoneNumbersAutoReceptionistRequests;
    security: AssignPhoneNumbersAutoReceptionistSecurity;
}
export declare class AssignPhoneNumbersAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    assignPhoneNumbersAutoReceptionist204ApplicationJSONAny?: any;
}
