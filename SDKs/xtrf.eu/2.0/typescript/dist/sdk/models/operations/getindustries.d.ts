import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIndustriesRequest extends SpeakeasyBase {
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class GetIndustriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    industriesDTO?: number[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
