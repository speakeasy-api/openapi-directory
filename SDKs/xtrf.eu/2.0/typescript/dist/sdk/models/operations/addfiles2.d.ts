import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddFiles2Request extends SpeakeasyBase {
    /**
     * Added files to the quote as added by PM.
     */
    timeDTO: shared.TimeDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class AddFiles2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
