import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetById8Request extends SpeakeasyBase {
    /**
     * list of adittional fields which should be embedded in the response (ie. tasks)
     */
    embed?: string;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class GetById8Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    quoteDTOv1?: shared.QuoteDTOv1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
