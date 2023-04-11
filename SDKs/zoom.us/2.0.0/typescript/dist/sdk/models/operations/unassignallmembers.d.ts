import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnassignAllMembersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UnassignAllMembersRequest extends SpeakeasyBase {
    callQueueId: string;
}
export declare class UnassignAllMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Member unassigned successfully.
     */
    unassignAllMembers204ApplicationJSONAny?: any;
}
