import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a payment method object.
 *
 * @remarks
 *
 */
export declare class ProxyModifyPaymentMethod extends SpeakeasyBase {
    /**
     *  The ID of the customer account associated with this payment method.
     *
     * @remarks
     *
     * **Note:** If a payment method was created without an account ID associated, you can update the payment method to specify an account ID in this operation. However, if a payment method is already associated with a customer account, you cannot update the payment method to associate it with another account ID. You cannot remove the previous account ID and leave the `AccountId` filed empty in this operation.
     */
    accountId?: string;
    /**
     *  The nine-digit routing number or ABA number used by banks. Use this field for ACH payment methods.
     *
     * @remarks
     *
     * **Character limit**: 9 **Values**: a string of 9 characters or fewer
     */
    achAbaCode?: string;
    /**
     *  The name of the account holder, which can be either a person or a company. Use this field for ACH payment methods.
     *
     * @remarks
     *
     * **Character limit**: 70 **Values**: a string of 70 characters or fewer
     */
    achAccountName?: string;
    /**
     *  The type of bank account associated with the ACH payment. Use this field for ACH payment methods.
     *
     * @remarks
     *
     * **Character limit**: 16 **Values**:
     *
     * - `BusinessChecking`
     * - `Checking`
     * - `Saving`
     *
     */
    achAccountType?: string;
    /**
     *  Line 1 for the ACH address. Required on create for the Vantiv payment gateway. Optional for other gateways.
     *
     * @remarks
     *
     * **Character limit:** **Values:** an address
     */
    achAddress1?: string;
    /**
     *  Line 2 for the ACH address. Required on create for the Vantiv payment gateway. Optional for other gateways.
     *
     * @remarks
     *
     * **Character limit:** **Values:** an address
     */
    achAddress2?: string;
    /**
     *  The name of the bank where the ACH payment account is held. Use this field for ACH payment methods.
     *
     * @remarks
     *
     * **Character limit**: 70 **Values**: a string of 70 characters or fewer
     */
    achBankName?: string;
    /**
     * The city of the ACH address. Use this field for ACH payment methods. **Note**: This field is only specific to the NMI payment gateway.
     *
     * @remarks
     *
     * **Character limit**: 40 **Values**: a string of 40 characters or fewer
     */
    achCity?: string;
    /**
     * The country of the ACH address. See [Country Names and Their ISO Standard 2- and 3-Digit Codes](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/D_Country%2C_State%2C_and_Province_Codes/A_Country_Names_and_Their_ISO_Codes) for the list of supported country names. Use this field for ACH methods.
     *
     * @remarks
     *
     * **Note**: This field is only specific to the NMI payment gateway.
     *
     * **Character limit**: 44 **Values**: a supported country name
     */
    achCountry?: string;
    /**
     * The billing address's zip code. This field is required only when you define an ACH payment method. **Note**: This field is only specific to the NMI payment gateway.
     *
     * @remarks
     *
     * **Character limit**: 20 **Values**: a string of 40 characters or fewer
     */
    achPostalCode?: string;
    /**
     * The billing address's state. Use this field is if the `ACHCountry` value is either `Canada` or the `US`. State names must be spelled in full. For more information, see the list of [supported state names](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/D_Country%2C_State%2C_and_Province_Codes/B_State_Names_and_2-Digit_Codes). This field is required only when you define an ACH payment method. **Note**: This field is only specific to the NMI payment gateway.
     *
     * @remarks
     *
     * **Character limit**: 50 **Values**: a valid state name
     */
    achState?: string;
    /**
     *  The branch code of the bank used for direct debit. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 10 **Values**:  string of 10 characters or fewer
     */
    bankBranchCode?: string;
    /**
     * The check digit in the international bank account number, which confirms the validity of the account. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 4 **Values**:  string of 4 characters or fewer
     */
    bankCheckDigit?: string;
    /**
     * The type of direct debit transfer. The value of this field is dependent on the country of the user. This field is only required if the `Type` field is set to `BankTransfer`.
     *
     * @remarks
     *
     *  **Values**:
     *
     *    - `SEPA`
     *
     *    - `AutomatischIncasso` (NL)
     *
     *    - `LastschriftDE` (Germany)
     *
     *    - `LastschriftAT` (Austria)
     *
     *    - `DemandeDePrelevement` (FR)
     *
     *    - `DirectDebitUK` (UK)
     *
     *    - `Domicil` (Belgium)
     *
     *    - `LastschriftCH` (CH)
     *
     *    - `RID` (Italy)
     *
     *    - `OrdenDeDomiciliacion` (Spain)
     *    - `Autogiro` (Sweden)
     *    - `Betalingsservice` (Denmark)
     *
     */
    bankTransferType?: string;
    /**
     *  The business identification code for Swiss direct payment methods that use the Global Collect payment gateway. Use this field only for direct debit payments in Switzerland with Global Collect.
     *
     * @remarks
     *
     * **Character limit**: 11 **Values**: string of 11 characters or fewer
     */
    businessIdentificationCode?: string;
    /**
     *  The city of the customer's address. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**:80 **Values**:  string of 80 characters or fewer
     */
    city?: string;
    /**
     * The name of the company.
     *
     * @remarks
     *
     * Zuora does not recommend that you use this field.
     *
     */
    companyName?: string;
    /**
     *  The two-letter country code of the customer's address. Use this field for direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 2 **Values**: a valid country code
     */
    country?: string;
    /**
     *  The first line of the card holder's address, which is often a street address or business name. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    creditCardAddress1?: string;
    /**
     *  The second line of the card holder's address. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 255 **Values**: a string of 255 characters or fewer
     */
    creditCardAddress2?: string;
    /**
     *  The city of the card holder's address. Use this field for credit card and direct debit payment methods
     *
     * @remarks
     *
     * **Character limit**: 40 **Values**: a string of 40 characters or fewer
     */
    creditCardCity?: string;
    /**
     *  The country of the card holder's address.
     */
    creditCardCountry?: string;
    /**
     *  The expiration month of the credit card or debit card. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 2 **Values**: a two-digit number, 01 - 12
     */
    creditCardExpirationMonth?: number;
    /**
     *  The expiration month of the credit card or debit card. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 4 **Values**: a four-digit number
     */
    creditCardExpirationYear?: number;
    /**
     *  The full name of the card holder. Use this field for credit card and direct debit payment methods.
     *
     * @remarks
     *
     * **Character limit**: 50 **Values**: a string of 50 characters or fewer
     */
    creditCardHolderName?: string;
    /**
     *  The billing address's zip code. This field is required only when you define a debit card or credit card payment.
     *
     * @remarks
     * **Character limit**: 20 **Values**: a string of 20 characters or fewer
     */
    creditCardPostalCode?: string;
    /**
     *  The CVV or CVV2 security code. See [How do I control what information Zuora sends over to the Payment Gateway?](https://knowledgecenter.zuora.com/kb/How_do_I_control_information_sent_to_payment_gateways_when_verifying_payment_methods%3F) for more information. To ensure PCI compliance, this value is not stored and cannot be queried.
     *
     * @remarks
     * **Values**: a valid CVV or CVV2 security code
     */
    creditCardSecurityCode?: string;
    /**
     *  The billing address's state. Use this field is if the `CreditCardCountry' value is either Canada or the US. State names must be spelled in full.
     */
    creditCardState?: string;
    /**
     * The type of the credit card.
     *
     * @remarks
     *
     * Possible values  include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see [Supported Payment Gateways](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways).
     *
     */
    creditCardType?: string;
    /**
     *  The session ID of the user when the `PaymentMethod` was created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, then Zuora passes this field to supported gateways. Currently only Verifi supports this field.
     *
     * @remarks
     * **Character limit**: 255 **Values**:
     */
    deviceSessionId?: string;
    /**
     *  An email address for the payment method in addition to the bill to contact email address.
     *
     * @remarks
     * **Character limit**: 80 **Values**: a string of 80 characters or fewer
     */
    email?: string;
    /**
     *  Indicates if the customer has an existing mandate or a new mandate. A mandate is a signed authorization for UK and NL customers. When you are migrating mandates from another system, be sure to set this field correctly. If you indicate that a new mandate is an existing mandate or vice-versa, then transactions fail. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 3 **Values**: `Yes`, `No`
     */
    existingMandate?: string;
    /**
     *  The customer's first name. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 30 **Values**: a string of 30 characters or fewer
     */
    firstName?: string;
    /**
     *  The International Bank Account Number. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 42 **Values**: a string of 42 characters or fewer
     */
    iban?: string;
    /**
     *  The IP address of the user when the payment method was created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, then Zuora passes this field to supported gateways. Currently PayPal, CyberSource, Authorize.Net, Verifi, and WorldPay support this field.
     *
     * @remarks
     * **Character limit**: 15 **Values**: a string of 15 characters or fewer
     */
    ipAddress?: string;
    /**
     * The unique identity number of the customer account.
     *
     * @remarks
     *
     * This field is required only if the `BankTransferType` field is set to `Autogiro` or `Betalingsservice`. It is a string of 12 characters for a Swedish identity number, and a string of 10 characters for a Denish identity number.
     *
     */
    identityNumber?: string;
    /**
     * Whether the customer account is a company.
     *
     * @remarks
     *
     * Zuora does not recommend that you use this field.
     *
     */
    isCompany?: boolean;
    /**
     *  The customer's last name. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 70 **Values**: a string of 70 characters or fewer
     */
    lastName?: string;
    /**
     *  The date of the most recent transaction.
     *
     * @remarks
     * **Character limit**: 29 **Values**: a valid date and time value
     */
    lastTransactionDateTime?: Date;
    /**
     *  The date when the mandate was created, in `yyyy-mm-dd` format. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 29
     */
    mandateCreationDate?: Date;
    /**
     *  The ID of the mandate. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 36 **Values**: a string of 36 characters or fewer
     */
    mandateID?: string;
    /**
     *  Indicates if  the mandate was received. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 3 **Values**: `Yes`, `No `(case-sensitive)
     */
    mandateReceived?: string;
    /**
     *  The date when the mandate was last updated, in `yyyy-mm-dd` format. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 29
     */
    mandateUpdateDate?: Date;
    /**
     *  Specifies the number of allowable consecutive failures Zuora attempts with the payment method before stopping.
     *
     * @remarks
     * **Values**: a valid number
     */
    maxConsecutivePaymentFailures?: number;
    /**
     * The number of consecutive failed payments for this payment method. It is reset to `0` upon successful payment.
     *
     * @remarks
     *
     */
    numConsecutiveFailures?: number;
    /**
     *  This field is used to indicate the status of the payment method created within an account. It is set to `Active` on creation.
     *
     * @remarks
     * **Character limit**: 6 **Values**: `Active` or `Closed`
     */
    paymentMethodStatus?: string;
    /**
     *  The retry interval setting, which prevents making a payment attempt if the last failed attempt was within the last specified number of hours. This field is required if the `UseDefaultRetryRule` field value is set to `false`.
     *
     * @remarks
     * **Character limit**: 4 **Values**: a whole number between 1 and 1000, exclusive
     */
    paymentRetryWindow?: number;
    /**
     *  The phone number that the account holder registered with the bank. This field is used for credit card validation when passing to a gateway.
     *
     * @remarks
     * **Character limit**: 40 **Values**: a string of 40 characters or fewer
     */
    phone?: string;
    /**
     *  The zip code of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 20 **Values**: a string of 20 characters or fewer
     */
    postalCode?: string;
    /**
     * A gateway unique identifier that replaces sensitive payment method data. `SecondTokenId` is conditionally required only when `TokenId` is being used to represent a gateway customer profile. `TokenID` is being used to represent a gateway customer profile. `SecondTokenId` is used in the CC Reference Transaction payment method.
     *
     * @remarks
     * **Character limit**: 64 **Values**: a string of 64 characters or fewer
     */
    secondTokenId?: string;
    /**
     *  The state of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 70 **Values**: a string of 70 characters or fewer
     */
    state?: string;
    /**
     *  The street name of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 100 **Values**: a string of 100 characters or fewer
     */
    streetName?: string;
    /**
     *  The street number of the customer's address. This field is used only for the direct debit payment method.
     *
     * @remarks
     * **Character limit**: 30 **Values**: a string of 30 characters or fewer
     */
    streetNumber?: string;
    /**
     *  Determines whether to use the default retry rules configured in the Zuora Payments settings. Set this to `true` to use the default retry rules. Set this to `false` to set the specific rules for this payment method. If you set this value to `false`, then the fields, `PaymentRetryWindow` and `MaxConsecutivePaymentFailures`, are required.
     *
     * @remarks
     * **Character limit**: 5 **Values**: `true` or `false`
     */
    useDefaultRetryRule: boolean;
}
