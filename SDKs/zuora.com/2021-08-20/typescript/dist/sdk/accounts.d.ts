import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccount - Retrieve an account
     *
     * Retrieves basic information about a customer account.
     *
     * This operation is a quick retrieval that doesn't include the account's subscriptions, invoices, payments, or usage details. Use Get account summary to get more detailed information about an account.
     *
    **/
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * getAccountSummary - Retrieve an account summary
     *
     * Retrieves detailed information about the specified customer account.
     *
     * The response includes the account information and a summary of the account’s subscriptions, invoices, payments, and usages for the last six recently updated subscriptions.
     *
     * ## Notes
     * Returns only the six most recent subscriptions based on the subscription updatedDate. Within those subscriptions, there may be many rate plans and many rate plan charges. These items are subject to the maximum limit on the array size.
     *
    **/
    getAccountSummary(req: operations.GetAccountSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountSummaryResponse>;
    /**
     * objectDeleteAccount - CRUD: Delete an account
     *
     * Deletes a specific account asynchronously.
     *
     * **Note:** When [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) is enabled, before deleting a customer account, you must delete all related orders and subscriptions where this account has been referenced as a subscription owner or invoice owner.
     *
    **/
    objectDeleteAccount(req: operations.ObjectDeleteAccountRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDeleteAccountResponse>;
    /**
     * objectGetAccount - CRUD: Retrieve an account
     *
     * Retrieves the information about one specific account.
     *
    **/
    objectGetAccount(req: operations.ObjectGetAccountRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGetAccountResponse>;
    /**
     * objectPostAccount - CRUD: Create an account
     *
     * Creates an account without creating any associated objects such as subscriptions.
     *
    **/
    objectPostAccount(req: operations.ObjectPostAccountRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPostAccountResponse>;
    /**
     * objectPutAccount - CRUD: Update an account
     *
     * Updates an account.
     *
    **/
    objectPutAccount(req: operations.ObjectPutAccountRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPutAccountResponse>;
    /**
     * postAccount - Create an account
     *
     * Creates a customer account with a payment method, a bill-to contact, and an optional sold-to contact. Request and response field descriptions and sample code are provided. Use this operation to optionally create a subscription, invoice for that subscription, and collect payment through the default payment method. The transaction is atomic; if any part fails for any reason, the entire transaction is rolled back.
     *
     * This operation is CORS Enabled, so you can use client-side Javascript to invoke the call.
     *
     * ## Notes
     * 1. The account is created in active status.
     * 2. If the `autoPay` field is set to `true` in the request, you must provide one of the `paymentMethod`, `creditCard`, or `hpmCreditCardPaymentMethodId` field, but not multiple. The one provided becomes the default payment method for this account. If the credit card information is declined or cannot be verified, no account is created.
     * 3. Customer accounts created with this call are automatically be set to Auto Pay.
     * 4. If either the `workEmail` or `personalEmail` field is specified, then the account's email delivery preference is automatically set to `true`. (In that case, emails go to the `workEmail` address, if it exists, or else the `personalEmail`.) If neither field is specified, the email delivery preference is automatically set to `false`.
     *
     * ## Defaults for customerAcceptanceDate and serviceActivationDate
     * Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.
     *
     * |        | serviceActivationDate(SA) specified          | serviceActivationDate (SA) NOT specified  |
     * | ------------- |:-------------:| -----:|
     * | customerAcceptanceDate (CA) specified      | SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
     * | customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |
     *
    **/
    postAccount(req: operations.PostAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountResponse>;
    /**
     * putAccount - Update an account
     *
     * Updates a customer account by specifying the account-key.
     *
     * ## Notes
     * 1. Only the fields to be changed should be specified.  Any field that is not included in the request body will not be changed.
     * 2. If an empty field is submitted with this operation, the corresponding field in the account is emptied.
     * 3. Email addresses: If no email addresses are specified, no change is made to the email addresses on file or to the email delivery preference. If either the **personalEmail** or **workEmail** is specified (or both), the system updates the corresponding email address(es) on file and the email delivery preference is set to `true`. (In that case, emails go to the **workEmail** address, if it exists, or else the **personalEmail**.) On the other hand, if as a result of this call both of the email addresses for the account are empty, the email delivery preference is set to `false`.
     * 4. The bill-to and sold-to contacts are separate data entities. If you select the **Same as Bill To Contact** check box during account creation, both the Bill To and Sold To contacts are updated upon updating either one because they point to the same contact record. In this case, if you want to update only one of them, you have to first create another contact and update the Bill To or Sold To contact of the customer account to be the newly created one.
     *
     * For a use case of this operation, see [Configure payment methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
     *
    **/
    putAccount(req: operations.PutAccountRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountResponse>;
}
