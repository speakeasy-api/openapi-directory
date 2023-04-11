import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Delete12Request extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class Delete12Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
