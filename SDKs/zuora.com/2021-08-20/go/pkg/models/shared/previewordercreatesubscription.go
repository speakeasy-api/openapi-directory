package shared

import (
	"time"
)

// PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount
// Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.
//
// **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.
type PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount struct {
	AccountNumber                *string                `json:"accountNumber,omitempty"`
	AdditionalEmailAddresses     *string                `json:"additionalEmailAddresses,omitempty"`
	AllowInvoiceEdit             *bool                  `json:"allowInvoiceEdit,omitempty"`
	AutoPay                      *bool                  `json:"autoPay,omitempty"`
	Batch                        *string                `json:"batch,omitempty"`
	BillCycleDay                 int64                  `json:"billCycleDay"`
	BillToContact                map[string]interface{} `json:"billToContact"`
	CommunicationProfileID       *string                `json:"communicationProfileId,omitempty"`
	CreditCard                   *CreditCard            `json:"creditCard,omitempty"`
	CreditMemoTemplateID         *string                `json:"creditMemoTemplateId,omitempty"`
	CrmID                        *string                `json:"crmId,omitempty"`
	Currency                     string                 `json:"currency"`
	CustomFields                 map[string]interface{} `json:"customFields,omitempty"`
	CustomerServiceRepName       *string                `json:"customerServiceRepName,omitempty"`
	DebitMemoTemplateID          *string                `json:"debitMemoTemplateId,omitempty"`
	HpmCreditCardPaymentMethodID *string                `json:"hpmCreditCardPaymentMethodId,omitempty"`
	InvoiceDeliveryPrefsEmail    *bool                  `json:"invoiceDeliveryPrefsEmail,omitempty"`
	InvoiceDeliveryPrefsPrint    *bool                  `json:"invoiceDeliveryPrefsPrint,omitempty"`
	InvoiceTemplateID            *string                `json:"invoiceTemplateId,omitempty"`
	Name                         string                 `json:"name"`
	Notes                        *string                `json:"notes,omitempty"`
	ParentID                     *string                `json:"parentId,omitempty"`
	PaymentGateway               *string                `json:"paymentGateway,omitempty"`
	PaymentMethod                map[string]interface{} `json:"paymentMethod,omitempty"`
	PaymentTerm                  *string                `json:"paymentTerm,omitempty"`
	PurchaseOrderNumber          *string                `json:"purchaseOrderNumber,omitempty"`
	SalesRep                     *string                `json:"salesRep,omitempty"`
	SoldToContact                map[string]interface{} `json:"soldToContact,omitempty"`
	TaxInfo                      *TaxInfo               `json:"taxInfo,omitempty"`
}

type PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum string

const (
	PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnumMonth PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = "Month"
	PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnumYear  PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = "Year"
	PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnumDay   PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = "Day"
	PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnumWeek  PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = "Week"
)

type PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum string

const (
	PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnumTermed    PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum = "TERMED"
	PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnumEvergreen PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum = "EVERGREEN"
)

// PreviewOrderCreateSubscriptionTermsInitialTerm
// Information about the first term of the subscription.
type PreviewOrderCreateSubscriptionTermsInitialTerm struct {
	Period     *int64                                                        `json:"period,omitempty"`
	PeriodType *PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum `json:"periodType,omitempty"`
	StartDate  *time.Time                                                    `json:"startDate,omitempty"`
	TermType   PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum    `json:"termType"`
}

type PreviewOrderCreateSubscriptionTermsRenewalSettingEnum string

const (
	PreviewOrderCreateSubscriptionTermsRenewalSettingEnumRenewWithSpecificTerm PreviewOrderCreateSubscriptionTermsRenewalSettingEnum = "RENEW_WITH_SPECIFIC_TERM"
	PreviewOrderCreateSubscriptionTermsRenewalSettingEnumRenewToEvergreen      PreviewOrderCreateSubscriptionTermsRenewalSettingEnum = "RENEW_TO_EVERGREEN"
)

// PreviewOrderCreateSubscriptionTerms
// Container for the terms and renewal settings of the subscription.
type PreviewOrderCreateSubscriptionTerms struct {
	AutoRenew      *bool                                                  `json:"autoRenew,omitempty"`
	InitialTerm    PreviewOrderCreateSubscriptionTermsInitialTerm         `json:"initialTerm"`
	RenewalSetting *PreviewOrderCreateSubscriptionTermsRenewalSettingEnum `json:"renewalSetting,omitempty"`
	RenewalTerms   []RenewalTerm                                          `json:"renewalTerms,omitempty"`
}

// PreviewOrderCreateSubscription
// Information about an order action of type `CreateSubscription`.
type PreviewOrderCreateSubscription struct {
	InvoiceSeparately              *bool                                                      `json:"invoiceSeparately,omitempty"`
	NewSubscriptionOwnerAccount    *PreviewOrderCreateSubscriptionNewSubscriptionOwnerAccount `json:"newSubscriptionOwnerAccount,omitempty"`
	Notes                          *string                                                    `json:"notes,omitempty"`
	SubscribeToRatePlans           []PreviewOrderRatePlanOverride                             `json:"subscribeToRatePlans,omitempty"`
	SubscriptionNumber             *string                                                    `json:"subscriptionNumber,omitempty"`
	SubscriptionOwnerAccountNumber *string                                                    `json:"subscriptionOwnerAccountNumber,omitempty"`
	Terms                          *PreviewOrderCreateSubscriptionTerms                       `json:"terms,omitempty"`
}
