import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Create3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerDTO?: shared.CustomerDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
