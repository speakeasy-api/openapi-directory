import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of template. Values include `user`, `group`, `autoReceptionist`, `commonarea`, or `interop`.
 */
export declare enum AddSettingTemplateApplicationJSONTypeEnum {
    User = "user",
    Group = "group",
    AutoReceptionist = "autoReceptionist",
    Commonarea = "commonarea",
    Interop = "interop"
}
export declare class AddSettingTemplateApplicationJSON extends SpeakeasyBase {
    /**
     * A description of the template.
     */
    description?: string;
    /**
     * The name of the template.
     */
    name: string;
    /**
     * Unique identifier of the site. Required only when multiple sites are enabled. See [Managing multiple sites](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites) for details.
     */
    siteId?: string;
    /**
     * The type of template. Values include `user`, `group`, `autoReceptionist`, `commonarea`, or `interop`.
     */
    type: AddSettingTemplateApplicationJSONTypeEnum;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Created Successfully.
 */
export declare class AddSettingTemplate201ApplicationXML extends SpeakeasyBase {
    /**
     * Template description.
     */
    description?: string;
    /**
     * Template ID.
     */
    id?: string;
    /**
     * Template name.
     */
    name?: string;
    /**
     * The type of template. Values include: `user`, `group`, `autoReceptionist`, `commonArea`, `zr`, or `interop`.
     */
    type?: string;
}
/**
 * **HTTP Status Code:** `201`<br>
 *
 * @remarks
 * Created Successfully.
 */
export declare class AddSettingTemplate201ApplicationJSON extends SpeakeasyBase {
    /**
     * Template description.
     */
    description?: string;
    /**
     * Template ID.
     */
    id?: string;
    /**
     * Template name.
     */
    name?: string;
    /**
     * The type of template. Values include: `user`, `group`, `autoReceptionist`, `commonArea`, `zr`, or `interop`.
     */
    type?: string;
}
export declare class AddSettingTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Created Successfully.
     */
    addSettingTemplate201ApplicationJSONObject?: AddSettingTemplate201ApplicationJSON;
}
