import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReceivable2Request extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
    /**
     * receivable's internal identifier
     */
    receivableId: number;
}
export declare class DeleteReceivable2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
