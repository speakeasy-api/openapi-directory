import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateReceivable1Request extends SpeakeasyBase {
    /**
     * Adds a receivable.
     */
    receivableCreateDTO: shared.ReceivableCreateDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class CreateReceivable1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    receivableDTO?: shared.ReceivableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
