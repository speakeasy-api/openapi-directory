import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Delete a contact
     *
     * @remarks
     * Deletes a contact.
     *
     */
    objectDELETEContact(req: operations.ObjectDELETEContactRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEContactResponse>;
    /**
     * CRUD: Retrieve a contact
     *
     * @remarks
     * Retrieves detailed information about a specific contact.
     *
     */
    objectGETContact(req: operations.ObjectGETContactRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETContactResponse>;
    /**
     * CRUD: Create a contact
     *
     * @remarks
     * Creates a contact for a specified account.
     *
     */
    objectPOSTContact(req: operations.ObjectPOSTContactRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTContactResponse>;
    /**
     * CRUD: Update a contact
     *
     * @remarks
     * Updates a contact for a specified account.
     *
     * You can update contacts for cancelled accounts.
     *
     * For a use case of this operation, see [Edit the contact information for an account](https://www.zuora.com/developer/api-guides/#Edit-the-contact-information-for-an-account).
     *
     */
    objectPUTContact(req: operations.ObjectPUTContactRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTContactResponse>;
    /**
     * Scrub a contact
     *
     * @remarks
     *
     * Scrubs the sensitive data of a specific contact.
     *
     * You can use this operation to replace all sensitive data in a contact and its related contact snapshot with dummy values that will be stored in Zuora databases.
     *
     * After scrubbing a contact, it is good practice to delete it. Otherwise, it might cause errors in subsequent operations.
     *
     * **Note**: To use this operation, you must ensure that the "Scrub Sensitive Data of Contact" billing permission is enabled in your user role. Contact your tenant administrator if you want to enable this permission. See [Scrub Contacts](https://knowledgecenter.zuora.com/BC_Subscription_Management/Customer_Accounts/A_How_to_Manage_Customer_Accounts/B_Key_Contacts/Scrub_Contacts) for more information.
     *
     */
    putScrubContact(req: operations.PUTScrubContactRequest, config?: AxiosRequestConfig): Promise<operations.PUTScrubContactResponse>;
}
