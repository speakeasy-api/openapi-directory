import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddAutoReceptionistApplicationJSON extends SpeakeasyBase {
    /**
     * Provide a name to help identify the auto receptionist.
     */
    name: string;
    /**
     * Unique identifier of the site where the auto receptionist is to be assigned. This field is required only if you have [multiple sites](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-Multiple-Sites) enabled.
     */
    siteId?: string;
}
/**
 * **HTTP Status Code:** `201` **Created**
 *
 * @remarks
 *
 * Auto receptionist added successfully.
 */
export declare class AddAutoReceptionist201ApplicationXML extends SpeakeasyBase {
    /**
     *  Extension number assigned to the auto receptionist.
     */
    extensionNumber?: number;
    /**
     * Auto receptionist ID. Unique Identifier of the auto receptionist.
     */
    id?: string;
    /**
     *  Name of the auto receptionist.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `201` **Created**
 *
 * @remarks
 *
 * Auto receptionist added successfully.
 */
export declare class AddAutoReceptionist201ApplicationJSON extends SpeakeasyBase {
    /**
     *  Extension number assigned to the auto receptionist.
     */
    extensionNumber?: number;
    /**
     * Auto receptionist ID. Unique Identifier of the auto receptionist.
     */
    id?: string;
    /**
     *  Name of the auto receptionist.
     */
    name?: string;
}
export declare class AddAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created**
     *
     * @remarks
     *
     * Auto receptionist added successfully.
     */
    addAutoReceptionist201ApplicationJSONObject?: AddAutoReceptionist201ApplicationJSON;
}
