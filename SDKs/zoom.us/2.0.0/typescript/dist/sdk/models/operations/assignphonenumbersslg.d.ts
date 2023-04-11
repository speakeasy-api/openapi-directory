import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssignPhoneNumbersSLGApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique Identifier of the phone number.
     */
    id?: string;
    /**
     * Phone number.
     */
    number?: string;
}
export declare class AssignPhoneNumbersSLGApplicationJSON extends SpeakeasyBase {
    /**
     * Phone number(s) to be assigned to the Shared Line Group.
     */
    phoneNumbers?: AssignPhoneNumbersSLGApplicationJSONPhoneNumbers[];
}
export declare class AssignPhoneNumbersSLGRequest extends SpeakeasyBase {
    requestBody?: AssignPhoneNumbersSLGApplicationJSON;
    /**
     * Unique Identifier of the Shared Line Group.
     */
    sharedLineGroupId: string;
}
export declare class AssignPhoneNumbersSLGResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
