import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Start1Request extends SpeakeasyBase {
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class Start1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
