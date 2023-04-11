import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteASharedLineGroupRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the shared line group that you would like to delete.
     */
    sharedLineGroupId: string;
}
export declare class DeleteASharedLineGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content** <br>
     *
     * @remarks
     * Shared Line Group Deleted.
     */
    deleteASharedLineGroup204ApplicationJSONAny?: any;
}
