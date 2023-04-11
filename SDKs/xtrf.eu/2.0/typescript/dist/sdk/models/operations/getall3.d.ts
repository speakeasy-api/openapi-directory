import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAll3Request extends SpeakeasyBase {
    /**
     * exact name of entity
     */
    nameEquals?: string;
}
export declare class GetAll3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceDTO?: shared.ServiceDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
