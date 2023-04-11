import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentMethods {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a payment method
     *
     * @remarks
     * Deletes a credit card payment method.
     *
     * If the specified payment method is the account's default payment
     * method, the request will fail.  In that case, you must first designate a
     * different payment method for that customer to be the default.
     *
     * For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
     *
     */
    deletePaymentMethods(req: operations.DELETEPaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.DELETEPaymentMethodsResponse>;
    /**
     * Retrieve a payment method
     *
     * @remarks
     * This operation allows you to get the detailed information about a payment method.
     *
     */
    getPaymentMethod(req: operations.GETPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.GETPaymentMethodResponse>;
    /**
     * List all credit card payment methods of an account
     *
     * @remarks
     * This REST API reference describes how to retrieve all credit card
     * information for the specified customer account.
     *
     * ## Notes
     * The response includes details of credit or debit cards for the specified customer account. Card numbers are masked, e.g., "************1234". Cards are returned in reverse chronological order of last update.
     *
     * Though you can also send requests for bank transfer, ACH, or other supported payment methods, the response will not include effective details of these payment methods.
     *
     */
    getPaymentMethodsCreditCard(req: operations.GETPaymentMethodsCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.GETPaymentMethodsCreditCardResponse>;
    /**
     * List stored credential profiles of a payment method
     *
     * @remarks
     * Retrieves the stored credential profiles within a payment method.
     *
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     *
     */
    getStoredCredentialProfiles(req: operations.GETStoredCredentialProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GETStoredCredentialProfilesResponse>;
    /**
     * CRUD: Delete a payment method
     */
    objectDELETEPaymentMethod(req: operations.ObjectDELETEPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.ObjectDELETEPaymentMethodResponse>;
    /**
     * CRUD: Retrieve a payment method
     */
    objectGETPaymentMethod(req: operations.ObjectGETPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETPaymentMethodResponse>;
    /**
     * CRUD: Create a payment method
     */
    objectPOSTPaymentMethod(req: operations.ObjectPOSTPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPOSTPaymentMethodResponse>;
    /**
     * CRUD: Update a payment method
     *
     * @remarks
     * For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
     */
    objectPUTPaymentMethod(req: operations.ObjectPUTPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.ObjectPUTPaymentMethodResponse>;
    /**
     * Cancel authorization
     *
     * @remarks
     * **Note:** If you wish to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Allows you to cancel an authorization. The payment gateways that support this operation include Verifi, CyberSource 1.28, CyberSource 1.97, Chase Paymentech Orbital, and Ingenico ePayments.
     *
     */
    postCancelAuthorization(req: operations.POSTCancelAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelAuthorizationResponse>;
    /**
     * Cancel a stored credential profile
     *
     * @remarks
     * Cancels a stored credential profile within a payment method.
     *
     * Cancelling the stored credential profile indicates that the stored credentials are no longer valid, per a customer request. You cannot reactivate the stored credential profile after you have cancelled it.
     *
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     *
     */
    postCancelStoredCredentialProfile(req: operations.POSTCancelStoredCredentialProfileRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelStoredCredentialProfileResponse>;
    /**
     * Create authorization
     *
     * @remarks
     * **Note:** If you want to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Enables you to authorize the availability of funds for a transaction but delay the capture of funds until a later time. Subsequently, use [CRUD: Create a payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) or [Create a payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) to capture the authorized funds, or use [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization) to cancel the authorization.
     *
     * The payment gateways that support this operation include:
     *
     * * Adyen integration v2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
     * * CyberSource 1.28
     * * CyberSource 1.97
     * * CyberSource 2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
     * * Chase Paymentech Orbital
     * * Ingenico ePayments
     * * Verifi - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
     *
     * Note that CyberSource 2.0 supports the Delayed Capture feature for both Credit Cards and Credit Card Reference payment methods.
     *
     * If you have the Invoice Settlement feature enabled, use the [Create payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) operation to capture the funds instead of the [CRUD: Create payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) operation.
     *
     *
     */
    postCreateAuthorization(req: operations.POSTCreateAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateAuthorizationResponse>;
    /**
     * Create a stored credential profile
     *
     * @remarks
     * Creates a stored credential profile within a payment method.
     *
     * The stored credential profile represents a consent agreement that you have established with a customer. When you use the payment method in a transaction, Zuora may include information from the stored credential profile to inform the payment processor that the transaction is related to your pre-existing consent agreement with the customer.
     *
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     *
     */
    postCreateStoredCredentialProfile(req: operations.POSTCreateStoredCredentialProfileRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateStoredCredentialProfileResponse>;
    /**
     * Expire a stored credential profile
     *
     * @remarks
     * Expires a stored credential profile within a payment method.
     *
     * Expiring the stored credential profile indicates that the stored credentials are no longer valid, per an expiration policy in the stored credential transaction framework. You cannot reactivate the stored credential profile after you have expired it.
     *
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     *
     */
    postExpireStoredCredentialProfile(req: operations.POSTExpireStoredCredentialProfileRequest, config?: AxiosRequestConfig): Promise<operations.POSTExpireStoredCredentialProfileResponse>;
    /**
     * Create a payment method
     *
     * @remarks
     * You can use this operation to create either a payment method associated with a specific customer account, or an orphan payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
     *
     * This operation supports the payment methods listed below.
     *
     * ### PayPal Express Checkout
     * The following request body fields are specific to this payment method:
     * * `BAID` (required)
     * * `email` (required)
     *
     * ### PayPal Native Express Checkout
     * The following request body fields are specific to this payment method:
     * * `BAID` (required)
     * * `email` (optional)
     *
     * ### PayPal Adaptive
     * The following request body fields are specific to this payment method:
     * * `preapprovalKey` (required)
     * * `email` (required)
     *
     * ### Credit Card
     * The following request body fields are specific to this payment method:
     * * `cardHolderInfo` (`cardHolderName` required)
     * * `cardNumber` (required)
     * * `cardType` (required)
     * * `expirationMonth` (required)
     * * `expirationYear` (required)
     * * `mitConsentAgreementRef`
     * * `mitConsentAgreementSrc`
     * * `mitNetworkTransactionId`
     * * `mitProfileAction`
     * * `mitProfileType`
     * * `mitProfileAgreedOn`
     * * `securityCode`
     * * `checkDuplicated`
     *
     *
     *
     * ### ACH
     * The following request body fields are applicable to this payment method:
     * * `bankABACode` (required)
     * * `bankAccountName` (required)
     * * `bankAccountNumber` (required)
     * * `bankAccountType` (required)
     * * `bankName` (required)
     * * `addressLine1`
     * * `addressLine2`
     * * `phone`
     * * `email`
     * * `city`
     * * `country`
     * * `state`
     * * `zipCode`
     *
     * ### SEPA
     * The following request body fields are applicable to this payment method:
     * * `IBAN` (required)
     * * `accountHolderInfo` (required)
     * * `businessIdentificationCode`
     *
     *
     * ### Betalingsservice (Direct Debit DK)
     * The following request body fields are applicable to this payment method:
     * * `accountNumber` (required)
     * * `identityNumber` (required)
     * * `bankCode` (required)
     * * `accountHolderInfo` (required)
     *
     *
     * ### Autogiro (Direct Debit SE)
     * The following request body fields are applicable to this payment method:
     * * `accountNumber` (required)
     * * `identityNumber` (required)
     * * `branchCode` (required)
     * * `accountHolderInfo` (required)
     *
     *
     * ### Bacs (Direct Debit UK)
     * The following request body fields are applicable to this payment method:
     * * `accountNumber` (required)
     * * `bankCode` (required)
     * * `accountHolderInfo` (required)
     *
     *
     * ### Becs (Direct Entry AU)
     * The following request body fields are applicable to this payment method:
     * * `accountNumber` (required)
     * * `branchCode` (required)
     * * `accountHolderInfo` (required)
     *
     *
     * ### Becsnz (Direct Debit NZ)
     * The following request body fields are applicable to this payment method:
     * * `accountNumber` (required)
     * * `bankCode` (required)
     * * `branchCode` (required)
     * * `accountHolderInfo` (required)
     *
     *
     * ### PAD (Pre-Authorized Debit)
     * The following request body fields are applicable to this payment method:
     * * `accountNumber` (required)
     * * `bankCode` (required)
     * * `branchCode` (required)
     * * `accountHolderInfo` (required)
     *
     *
     * ### Custom payment methods
     * Note: This feature is in the Early Adopter phase. If you want to use this feature, submit a request at [Zuora Global Support](http://support.zuora.com/) to enable the Universal Payment Connector and Open Payment Method services that support this feature.
     *
     * With the support of Universal Payment Connector (UPC) and Open Payment Method (OPM) services, you can create custom payment methods by using the fields defined in a definition file for this type of custom payment method. See [Set up custom payment gateways and payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/MB_Set_up_custom_payment_gateways_and_payment_methods) for details.
     *
     */
    postPaymentMethods(req: operations.POSTPaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.POSTPaymentMethodsResponse>;
    /**
     * Create a credit card payment method
     *
     * @remarks
     * You can create a credit card payment method for a customer account or an orphan credit card payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
     *
     * This API call is CORS Enabled. Use client-side JavaScript to invoke the call.
     *
     * **Note**: If you use this operation to create credit card payment methods instead of using the [iFrame of Hosted Payment Pages](https://knowledgecenter.zuora.com/CB_Billing/LA_Hosted_Payment_Pages/C_Hosted_Payment_Pages/B_Implementing_Hosted_Payment_Pages_on_Your_Website/C_Embed_and_Submit_the_iFrame), you are subject to PCI-compliance audit requirements.
     *
     */
    postPaymentMethodsCreditCard(req: operations.POSTPaymentMethodsCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.POSTPaymentMethodsCreditCardResponse>;
    /**
     * Create an Apple Pay payment method
     *
     * @remarks
     * The decryption API endpoint can conditionally perform 3 tasks in one atomic call:
     *   * Decrypt Apple Pay Payment token
     *   * Create Credit Card Payment Method in Zuora with decrypted Apple Pay information
     *   * Process Payment on a specified Invoice (optional)
     *
     */
    postPaymentMethodsDecryption(req: operations.POSTPaymentMethodsDecryptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTPaymentMethodsDecryptionResponse>;
    /**
     * Update a payment method
     *
     * @remarks
     * This operation allows you to update an existing payment method.
     *
     * The following request body fields can be updated regardless of payment method types:
     * * `authGateway`
     * * `gatewayOptions`
     * * `accountHolderInfo`
     * * Custom fields
     *
     * The following request body fields can be updated only for the Credit Card payment method:
     * * `expirationMonth`
     * * `expirationYear`
     * * `securityCode`
     *
     */
    putPaymentMethod(req: operations.PUTPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.PUTPaymentMethodResponse>;
    /**
     * Update a credit card payment method
     *
     * @remarks
     * Updates an existing credit card payment method.
     *
     */
    putPaymentMethodsCreditCard(req: operations.PUTPaymentMethodsCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.PUTPaymentMethodsCreditCardResponse>;
    /**
     * Scrub a payment method
     *
     * @remarks
     *
     * This operation enables you to replace all sensitive data in a payment method, related payment method snapshot table, and four related log tables with dummy values that will be stored in Zuora databases.
     *
     * This operation will scrub the sensitive data and soft-delete the specified payment method at the same time.
     *
     * If you want to delete or anonymize personal data in Zuora, you must scrub the payment method before anonymizing the associated account and contact. See [Delete or anonymize personal data](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Responding_to_individual_requests_for_access%2C_correction%2C_and_deletion_of_data_under_applicable_privacy_laws#Edit_and_correct_personal_data) for more information.
     *
     * **Note:** In order to use this operation, you must ensure that the **Scrub Sensitive Data of Specific Payment Method payments** permission is enabled in your user role. Contact your tenant administrator if you want to enable this permission. See [Scrub Payment Methods](https://knowledgecenter.zuora.com/CB_Billing/L_Payment_Methods/Scrub_Payment_Methods) for more information.
     *
     */
    putScrubPaymentMethods(req: operations.PUTScrubPaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.PUTScrubPaymentMethodsResponse>;
    /**
     * Verify a payment method
     *
     * @remarks
     * Sends an authorization request to the corresponding payment gateway to verify the payment method, even though no changes are made for the payment method. Supported payment methods are Credit Cards and Paypal.
     *
     * Zuora now supports performing a standalone zero dollar verification or one dollar authorization for credit cards. It also supports a billing agreement status check on PayPal payment methods.
     *
     * If a payment method is created by Hosted Payment Pages and is not assigned to any billing account, the payment method cannot be verified through this operation.
     *
     */
    putVerifyPaymentMethods(req: operations.PUTVerifyPaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.PUTVerifyPaymentMethodsResponse>;
}
