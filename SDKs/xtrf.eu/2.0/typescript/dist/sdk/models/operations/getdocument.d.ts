import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDocumentRequest extends SpeakeasyBase {
    /**
     * client invoice's internal identifier
     */
    invoiceId: number;
}
export declare class GetDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    urlResultDTO?: shared.UrlResultDTO;
}
