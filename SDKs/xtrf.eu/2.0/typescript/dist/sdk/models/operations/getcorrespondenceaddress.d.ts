import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCorrespondenceAddressRequest extends SpeakeasyBase {
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class GetCorrespondenceAddressResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addressDTO?: shared.AddressDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
