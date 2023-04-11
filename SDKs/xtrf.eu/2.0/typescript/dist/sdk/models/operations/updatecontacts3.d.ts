import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContacts3Request extends SpeakeasyBase {
    /**
     * Updated Client Contacts for a quote.
     */
    smartContactsDTO: shared.SmartContactsDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class UpdateContacts3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    smartContactsDTO?: shared.SmartContactsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
