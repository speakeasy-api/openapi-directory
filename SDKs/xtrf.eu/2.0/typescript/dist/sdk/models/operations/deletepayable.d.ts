import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePayableRequest extends SpeakeasyBase {
    /**
     * payable's internal identifier
     */
    payableId: number;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class DeletePayableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
