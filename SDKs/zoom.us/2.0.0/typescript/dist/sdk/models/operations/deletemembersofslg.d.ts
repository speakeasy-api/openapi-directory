import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMembersOfSLGRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the Shared Line Group that you would like to delete.
     */
    sharedLineGroupId: string;
}
export declare class DeleteMembersOfSLGResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     *
     * Members unassigned successfully.
     */
    deleteMembersOfSLG204ApplicationJSONAny?: any;
}
