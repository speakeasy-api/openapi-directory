import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContacts3Request extends SpeakeasyBase {
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class GetContacts3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    smartContactsDTO?: shared.SmartContactsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
