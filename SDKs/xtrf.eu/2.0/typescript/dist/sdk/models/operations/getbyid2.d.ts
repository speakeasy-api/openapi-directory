import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById2Request extends SpeakeasyBase {
    /**
     * client's internal identifier
     */
    customerId: number;
    /**
     * list of additional fields which should be embedded in the response (available options: persons)
     */
    embed?: string;
}
export declare class GetById2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerDTO?: shared.CustomerDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
