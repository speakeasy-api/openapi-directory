import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContacts1Request extends SpeakeasyBase {
    /**
     * task's internal identifier
     */
    taskId: string;
}
export declare class GetContacts1Response extends SpeakeasyBase {
    /**
     * Success
     */
    contactsDTO?: shared.ContactsDTO;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
