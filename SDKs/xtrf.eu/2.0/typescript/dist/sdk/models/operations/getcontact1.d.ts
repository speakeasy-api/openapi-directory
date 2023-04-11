import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContact1Request extends SpeakeasyBase {
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class GetContact1Response extends SpeakeasyBase {
    /**
     * Success
     */
    contactDTO?: shared.ContactDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
