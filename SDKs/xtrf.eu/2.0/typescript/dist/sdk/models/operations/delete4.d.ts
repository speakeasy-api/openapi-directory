import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete4Request extends SpeakeasyBase {
    /**
     * customer price list's internal identifier
     */
    priceListId: number;
}
export declare class Delete4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
