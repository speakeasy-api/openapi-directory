import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssignPhoneNumbersSlgPathParams extends SpeakeasyBase {
    sharedLineGroupId: string;
}
export declare class AssignPhoneNumbersSlgApplicationJsonPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AssignPhoneNumbersSlgApplicationJson extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneNumbersSlgApplicationJsonPhoneNumbers[];
}
export declare class AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers extends SpeakeasyBase {
    id?: string;
    number?: string;
}
export declare class AssignPhoneNumbersSlgMultipartFormData1 extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers[];
}
export declare class AssignPhoneNumbersSlgRequests extends SpeakeasyBase {
    object?: AssignPhoneNumbersSlgApplicationJson;
    object1?: AssignPhoneNumbersSlgMultipartFormData1;
}
export declare class AssignPhoneNumbersSlgRequest extends SpeakeasyBase {
    pathParams: AssignPhoneNumbersSlgPathParams;
    request?: AssignPhoneNumbersSlgRequests;
}
export declare class AssignPhoneNumbersSlgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
