import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePayable2Request extends SpeakeasyBase {
    /**
     * payable's internal identifier
     */
    payableId: number;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class DeletePayable2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
