import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllActiveRequest extends SpeakeasyBase {
    /**
     * exact name of entity
     */
    nameEquals?: string;
}
export declare class GetAllActiveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceDTO?: shared.ServiceDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
