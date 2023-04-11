import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCorrespondenceAddressRequest extends SpeakeasyBase {
    /**
     * Updated address of a given client.
     */
    addressDTO: shared.AddressDTO;
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class UpdateCorrespondenceAddressResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addressDTO?: shared.AddressDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
