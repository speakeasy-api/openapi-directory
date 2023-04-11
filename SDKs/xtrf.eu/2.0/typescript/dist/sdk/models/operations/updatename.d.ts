import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateNameRequest extends SpeakeasyBase {
    stringDTO: shared.StringDTO;
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class UpdateNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stringDTO?: shared.StringDTO;
}
