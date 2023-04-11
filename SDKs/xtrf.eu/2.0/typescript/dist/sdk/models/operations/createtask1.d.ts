import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTask1Request extends SpeakeasyBase {
    /**
     * Updated custom fields of a given quote.
     */
    taskDTO: shared.TaskDTO;
    /**
     * quote's internal identifier
     */
    quoteId: string;
}
export declare class CreateTask1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    taskDTO?: shared.TaskDTO;
}
