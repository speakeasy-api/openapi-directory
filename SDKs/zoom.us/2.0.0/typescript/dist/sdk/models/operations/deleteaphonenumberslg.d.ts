import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAPhoneNumberSLGRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the phone number which is to be unassigned. This can be retrieved from Get a Shared Line Group API.
     */
    phoneNumberId: string;
    /**
     * Unique identifier of the shared line group from which you would like to unassign a phone number.
     */
    sharedLineGroupId: string;
}
export declare class DeleteAPhoneNumberSLGResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
