import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAddressRequest extends SpeakeasyBase {
    /**
     * Updated address of a given client.
     */
    addressDTO: shared.AddressDTO;
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class UpdateAddressResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addressDTO?: shared.AddressDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
