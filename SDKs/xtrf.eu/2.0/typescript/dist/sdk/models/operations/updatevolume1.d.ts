import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateVolume1Request extends SpeakeasyBase {
    /**
     * Updated volume for a quote.
     */
    bigDecimalDTO: shared.BigDecimalDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateVolume1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
