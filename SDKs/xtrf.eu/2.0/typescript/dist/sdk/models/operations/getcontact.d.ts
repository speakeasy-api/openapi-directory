import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContactRequest extends SpeakeasyBase {
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class GetContactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    personContactDTO?: shared.PersonContactDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
