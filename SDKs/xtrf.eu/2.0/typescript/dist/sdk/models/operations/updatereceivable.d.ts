import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateReceivableRequest extends SpeakeasyBase {
    receivableDTO: shared.ReceivableDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
    /**
     * receivable's internal identifier
     */
    receivableId: number;
}
export declare class UpdateReceivableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    receivableDTO?: shared.ReceivableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
