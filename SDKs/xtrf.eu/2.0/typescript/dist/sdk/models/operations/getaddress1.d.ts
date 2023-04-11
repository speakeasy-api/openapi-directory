import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAddress1Request extends SpeakeasyBase {
    /**
     * provider's internal identifier
     */
    providerId: number;
}
export declare class GetAddress1Response extends SpeakeasyBase {
    /**
     * Success
     */
    addressDTO?: shared.AddressDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
