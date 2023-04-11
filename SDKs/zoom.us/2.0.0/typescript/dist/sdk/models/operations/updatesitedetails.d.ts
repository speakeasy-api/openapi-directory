import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateSiteDetailsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateSiteDetailsApplicationJSON extends SpeakeasyBase {
    /**
     * Name of the site.
     */
    name?: string;
    /**
     * [Site Code](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites#h_79ca9c8f-c97b-4486-aa59-d0d9d31a525b).
     */
    siteCode?: number;
}
export declare class UpdateSiteDetailsRequest extends SpeakeasyBase {
    requestBody?: UpdateSiteDetailsApplicationJSON;
    /**
     * Unique Identifier of the Site.
     */
    siteId: string;
}
export declare class UpdateSiteDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Site details updated successfully.
     */
    updateSiteDetails204ApplicationJSONAny?: any;
}
