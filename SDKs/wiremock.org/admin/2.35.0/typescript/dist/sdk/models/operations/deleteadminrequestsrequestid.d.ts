import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAdminRequestsRequestIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the logged request
     */
    requestId: string;
}
export declare class DeleteAdminRequestsRequestIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
