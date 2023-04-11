import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContactsRequest extends SpeakeasyBase {
    /**
     * Updated contacts of a given project.
     */
    contactsDTO: shared.ContactsDTO;
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class UpdateContactsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    contactsDTO?: shared.ContactsDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
