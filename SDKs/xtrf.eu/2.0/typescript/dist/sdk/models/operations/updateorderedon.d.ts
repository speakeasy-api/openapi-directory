import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateOrderedOnRequest extends SpeakeasyBase {
    /**
     * Updated Order Date for a project.
     */
    timeDTO: shared.TimeDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateOrderedOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
