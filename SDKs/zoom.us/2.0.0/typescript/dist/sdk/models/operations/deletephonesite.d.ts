import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePhoneSiteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeletePhoneSiteRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Site.
     */
    siteId: string;
    /**
     * The Site ID of another site where the assets of the current site (users, numbers and phones) can be transferred to.
     */
    transferSiteId: string;
}
export declare class DeletePhoneSiteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * Phone Site deleted.
     */
    deletePhoneSite204ApplicationJSONAny?: any;
}
