import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
 */
export declare class UpdateASharedLineGroupApplicationJSONPrimaryNumber extends SpeakeasyBase {
    /**
     * Phone Number ID. Unique Identifier of the Phone Number.
     */
    id?: string;
    /**
     * Phone Number that you would like to assign as the primary number for this Shared Line Group.
     */
    number?: string;
}
/**
 * Status of the Shared Line Group.
 */
export declare enum UpdateASharedLineGroupApplicationJSONStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class UpdateASharedLineGroupApplicationJSON extends SpeakeasyBase {
    /**
     * Display Name of the Shared Line Group.
     */
    displayName?: string;
    /**
     * Extension number assigned to the Shared Line Group.
     */
    extensionNumber?: number;
    /**
     * If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
     */
    primaryNumber?: UpdateASharedLineGroupApplicationJSONPrimaryNumber;
    /**
     * Status of the Shared Line Group.
     */
    status?: UpdateASharedLineGroupApplicationJSONStatusEnum;
    /**
     * Timezone to be used for the Business Hours. A value should be provided from the IDs listed [here](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones).
     */
    timezone?: string;
}
export declare class UpdateASharedLineGroupRequest extends SpeakeasyBase {
    requestBody?: UpdateASharedLineGroupApplicationJSON;
    /**
     * Unique identifier of the shared line group that is to be updated.
     */
    sharedLineGroupId: string;
}
export declare class UpdateASharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**
     *
     * @remarks
     *
     * Shared Line Group Updated Successfully.
     */
    updateASharedLineGroup204ApplicationJSONAny?: any;
}
