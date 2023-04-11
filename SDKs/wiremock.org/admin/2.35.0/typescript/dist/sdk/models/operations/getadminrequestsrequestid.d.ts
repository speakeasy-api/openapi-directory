import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAdminRequestsRequestIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the logged request
     */
    requestId: string;
}
export declare class GetAdminRequestsRequestIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
