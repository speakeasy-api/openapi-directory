import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete5Request extends SpeakeasyBase {
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class Delete5Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
