import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateIndustriesRequest extends SpeakeasyBase {
    /**
     * Updated industries of a given client.
     */
    requestBody: number[];
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class UpdateIndustriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    industriesDTO?: number[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
