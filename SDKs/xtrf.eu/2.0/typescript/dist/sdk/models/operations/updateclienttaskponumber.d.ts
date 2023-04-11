import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateClientTaskPONumberRequest extends SpeakeasyBase {
    /**
     * Updated Client Task PO Number of a given task.
     */
    stringDTO: shared.StringDTO;
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class UpdateClientTaskPONumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stringDTO?: shared.StringDTO;
}
