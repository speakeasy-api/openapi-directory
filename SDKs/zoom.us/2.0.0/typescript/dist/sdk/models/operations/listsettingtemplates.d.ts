import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSettingTemplatesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListSettingTemplatesRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Number of records returns within a single API call.
     */
    pageSize?: number;
    /**
     * Unique identifier of the site. This field is required only if multiple sites have been enabled.  of the site. Required only when multiple sites are enabled. See [Managing multiple sites](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites) for details. If this is not provided, the response lists the account level setting templates.
     */
    siteId?: string;
}
/**
 * Template type.<br>
 *
 * @remarks
 * The value of this field can be one of the following:<br>
 * * `user`<br>
 * * `group`<br>
 * * `autReceptionist`<br>
 * * `commonArea`<br>
 * * `zr`<br>
 * * `interop`<br>
 */
export declare enum ListSettingTemplates200ApplicationXMLTemplatesTypeEnum {
    User = "user",
    Group = "group",
    AutReceptionist = "autReceptionist",
    CommonArea = "commonArea",
    Zr = "zr",
    Interop = "interop"
}
export declare class ListSettingTemplates200ApplicationXMLTemplates extends SpeakeasyBase {
    /**
     * Template description.
     */
    description?: string;
    /**
     * Unique identifier of the template.
     */
    id?: string;
    /**
     * Template name.
     */
    name?: string;
    /**
     * Template type.<br>
     *
     * @remarks
     * The value of this field can be one of the following:<br>
     * * `user`<br>
     * * `group`<br>
     * * `autReceptionist`<br>
     * * `commonArea`<br>
     * * `zr`<br>
     * * `interop`<br>
     */
    type?: ListSettingTemplates200ApplicationXMLTemplatesTypeEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * OK
 */
export declare class ListSettingTemplates200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call. The default is **30** and the maximum is **300**.
     */
    pageSize?: number;
    templates?: ListSettingTemplates200ApplicationXMLTemplates[];
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
/**
 * Template type.<br>
 *
 * @remarks
 * The value of this field can be one of the following:<br>
 * * `user`<br>
 * * `group`<br>
 * * `autReceptionist`<br>
 * * `commonArea`<br>
 * * `zr`<br>
 * * `interop`<br>
 */
export declare enum ListSettingTemplates200ApplicationJSONTemplatesTypeEnum {
    User = "user",
    Group = "group",
    AutReceptionist = "autReceptionist",
    CommonArea = "commonArea",
    Zr = "zr",
    Interop = "interop"
}
export declare class ListSettingTemplates200ApplicationJSONTemplates extends SpeakeasyBase {
    /**
     * Template description.
     */
    description?: string;
    /**
     * Unique identifier of the template.
     */
    id?: string;
    /**
     * Template name.
     */
    name?: string;
    /**
     * Template type.<br>
     *
     * @remarks
     * The value of this field can be one of the following:<br>
     * * `user`<br>
     * * `group`<br>
     * * `autReceptionist`<br>
     * * `commonArea`<br>
     * * `zr`<br>
     * * `interop`<br>
     */
    type?: ListSettingTemplates200ApplicationJSONTemplatesTypeEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * OK
 */
export declare class ListSettingTemplates200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call. The default is **30** and the maximum is **300**.
     */
    pageSize?: number;
    templates?: ListSettingTemplates200ApplicationJSONTemplates[];
    /**
     * The total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListSettingTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * OK
     */
    listSettingTemplates200ApplicationJSONObject?: ListSettingTemplates200ApplicationJSON;
}
