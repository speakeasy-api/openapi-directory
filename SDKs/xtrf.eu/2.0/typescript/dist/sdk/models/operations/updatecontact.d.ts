import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContactRequest extends SpeakeasyBase {
    /**
     * Updated contact of a given person.
     */
    personContactDTO: shared.PersonContactDTO;
    /**
     * person's internal identifier
     */
    personId: number;
}
export declare class UpdateContactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    personContactDTO?: shared.PersonContactDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
