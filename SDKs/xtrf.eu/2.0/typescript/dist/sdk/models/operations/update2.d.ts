import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Update2Request extends SpeakeasyBase {
    /**
     * Updated client
     */
    customerDTO: shared.CustomerDTO;
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class Update2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerDTO?: shared.CustomerDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
