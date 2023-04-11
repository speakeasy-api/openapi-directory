import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete13Request extends SpeakeasyBase {
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class Delete13Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
