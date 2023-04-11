import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePayableRequest extends SpeakeasyBase {
    payableDTO: shared.PayableDTO;
    /**
     * payable's internal identifier
     */
    payableId: number;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdatePayableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    payableDTO?: shared.PayableDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
