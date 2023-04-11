import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContactsRequest extends SpeakeasyBase {
    /**
     * project's internal identifier
     */
    projectId: string;
}
export declare class GetContactsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    contactsDTO?: shared.ContactsDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
