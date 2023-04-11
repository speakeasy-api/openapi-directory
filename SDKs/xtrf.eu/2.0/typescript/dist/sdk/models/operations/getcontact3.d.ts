import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContact3Request extends SpeakeasyBase {
    /**
     * provider's internal identifier
     */
    providerId: number;
}
export declare class GetContact3Response extends SpeakeasyBase {
    /**
     * Success
     */
    contactDTO?: shared.ContactDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
