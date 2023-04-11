import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete9Request extends SpeakeasyBase {
    /**
     * provider price list's internal identifier
     */
    priceListId: number;
}
export declare class Delete9Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
