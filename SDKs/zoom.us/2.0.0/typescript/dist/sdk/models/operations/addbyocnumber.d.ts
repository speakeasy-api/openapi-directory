import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddBYOCNumberApplicationJSON extends SpeakeasyBase {
    /**
     * Name of the carrier.
     */
    carrier: string;
    /**
     * Phone number(s) to be added to Zoom. The value should be in e164 format.
     */
    phoneNumbers: string[];
    /**
     * Unique identifier of the site. This field is only required if you have enabled multiple sites in the account. See [Managing multiple sites](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites) or [Adding a site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites#h_05c88e35-1593-491f-b1a8-b7139a75dc15) for details.
     */
    siteId?: string;
}
export declare class AddBYOCNumber201ApplicationXMLPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique identifier of the phone number.
     */
    id?: string;
    /**
     * Phone number in e164 format.
     */
    number?: string;
}
/**
 * **HTTP Status Code:** `201` **Created**
 */
export declare class AddBYOCNumber201ApplicationXML extends SpeakeasyBase {
    phoneNumbers?: AddBYOCNumber201ApplicationXMLPhoneNumbers[];
}
export declare class AddBYOCNumber201ApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique identifier of the phone number.
     */
    id?: string;
    /**
     * Phone number in e164 format.
     */
    number?: string;
}
/**
 * **HTTP Status Code:** `201` **Created**
 */
export declare class AddBYOCNumber201ApplicationJSON extends SpeakeasyBase {
    phoneNumbers?: AddBYOCNumber201ApplicationJSONPhoneNumbers[];
}
export declare class AddBYOCNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created**
     */
    addBYOCNumber201ApplicationJSONObject?: AddBYOCNumber201ApplicationJSON;
}
