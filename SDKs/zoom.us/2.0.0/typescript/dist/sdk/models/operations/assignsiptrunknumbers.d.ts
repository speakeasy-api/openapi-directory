import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssignSipTrunkNumbersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AssignSipTrunkNumbersApplicationJSON extends SpeakeasyBase {
    /**
     * Phone number(s) to be assigned to the sub account.
     */
    phoneNumbers?: string[];
}
export declare class AssignSipTrunkNumbersRequest extends SpeakeasyBase {
    requestBody?: AssignSipTrunkNumbersApplicationJSON;
    /**
     * Unique Identifier of the sub account.
     */
    accountId: string;
}
export declare class AssignSipTrunkNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created**<br>
     *
     * @remarks
     * Numbers assigned successfully.
     *
     */
    assignSipTrunkNumbers201ApplicationJSONAny?: any;
}
