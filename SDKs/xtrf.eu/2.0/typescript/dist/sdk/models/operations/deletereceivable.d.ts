import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReceivableRequest extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
    /**
     * receivable's internal identifier
     */
    receivableId: number;
}
export declare class DeleteReceivableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
