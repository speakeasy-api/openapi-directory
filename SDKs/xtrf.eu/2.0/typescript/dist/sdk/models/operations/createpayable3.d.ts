import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePayable3Request extends SpeakeasyBase {
    payableCreateDTO: shared.PayableCreateDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class CreatePayable3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    payableDTO?: shared.PayableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
