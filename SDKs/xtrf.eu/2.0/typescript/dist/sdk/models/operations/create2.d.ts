import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Create2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customerPersonDTO?: shared.CustomerPersonDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
