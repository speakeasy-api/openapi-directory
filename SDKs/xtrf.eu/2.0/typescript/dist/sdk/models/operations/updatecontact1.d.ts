import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContact1Request extends SpeakeasyBase {
    /**
     * Updated contact of a given client.
     */
    contactDTO: shared.ContactDTO;
    /**
     * client's internal identifier
     */
    customerId: number;
}
export declare class UpdateContact1Response extends SpeakeasyBase {
    /**
     * Success
     */
    contactDTO?: shared.ContactDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
