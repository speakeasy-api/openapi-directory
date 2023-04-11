import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateASharedLineGroupSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class CreateASharedLineGroupApplicationJSON extends SpeakeasyBase {
    /**
     * Provide a description for the shared line group.
     */
    description?: string;
    /**
     * Provide a name to help identify the shared line group.
     */
    displayName: string;
    /**
     * Extension number to be assigned to the shared line group. If a [site code has been assigned](https://support.zoom.us/hc/en-us/articles/360020809672#h_79ca9c8f-c97b-4486-aa59-d0d9d31a525b) to the site, provide the short extension number
     */
    extensionNumber?: number;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites) that you would like to use for the shared line group. You will only be able to add members that belong to this site to the shared line group.
     *
     * @remarks
     *
     * This field is required only if the [multiple sites](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites) option has been enabled for the account.
     */
    siteId?: string;
}
export declare class CreateASharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK** <br>
     *
     * @remarks
     * Shared Line Group created successfully.
     *
     */
    createASharedLineGroup200ApplicationJSONAny?: any;
}
