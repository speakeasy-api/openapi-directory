import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetStatusRequest extends SpeakeasyBase {
    /**
     * Changed invoice status to given status.
     */
    statusRequestDTO: shared.StatusRequestDTO;
    /**
     * provider invoice's internal identifier
     */
    invoiceId: number;
}
export declare class SetStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
