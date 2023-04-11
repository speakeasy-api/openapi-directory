import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarRegistrantStatusSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Used to approve a registrant, deny a registrant, or cancel a previously approved registrant.
 */
export declare enum WebinarRegistrantStatusApplicationJSONActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}
export declare class WebinarRegistrantStatusApplicationJSONRegistrants extends SpeakeasyBase {
    /**
     * Registrant's email address.
     */
    email?: string;
    /**
     * Registrant ID
     */
    id?: string;
}
export declare class WebinarRegistrantStatusApplicationJSON extends SpeakeasyBase {
    /**
     * Used to approve a registrant, deny a registrant, or cancel a previously approved registrant.
     */
    action: WebinarRegistrantStatusApplicationJSONActionEnum;
    /**
     * List of registrants.
     */
    registrants?: WebinarRegistrantStatusApplicationJSONRegistrants[];
}
export declare class WebinarRegistrantStatusRequest extends SpeakeasyBase {
    requestBody: WebinarRegistrantStatusApplicationJSON;
    /**
     * The meeting occurrence ID.
     */
    occurrenceId?: string;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class WebinarRegistrantStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
