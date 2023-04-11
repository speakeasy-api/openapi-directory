import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById10Request extends SpeakeasyBase {
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class GetById10Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    quoteDTOv2?: shared.QuoteDTOv2;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
