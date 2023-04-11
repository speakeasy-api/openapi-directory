import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateReceivable3Request extends SpeakeasyBase {
    receivableCreateDTO: shared.ReceivableCreateDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class CreateReceivable3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    receivableDTO?: shared.ReceivableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
