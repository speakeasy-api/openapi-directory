package shared

import (
	"time"
)

// CreateSubscriptionNewSubscriptionOwnerAccount
// Information about a new account that will own the subscription. Only available if you have enabled the Owner Transfer feature.
//
// **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
//
// If you do not set this field or the `subscriptionOwnerAccountNumber` field, the account that owns the order will also own the subscription. Zuora will return an error if you set this field and the `subscriptionOwnerAccountNumber` field.
type CreateSubscriptionNewSubscriptionOwnerAccount struct {
	AccountNumber                *string                `json:"accountNumber,omitempty"`
	AutoPay                      *bool                  `json:"autoPay,omitempty"`
	Batch                        *string                `json:"batch,omitempty"`
	BillCycleDay                 int64                  `json:"billCycleDay"`
	BillToContact                map[string]interface{} `json:"billToContact"`
	CommunicationProfileID       *string                `json:"communicationProfileId,omitempty"`
	CreditCard                   *CreditCard            `json:"creditCard,omitempty"`
	CrmID                        *string                `json:"crmId,omitempty"`
	Currency                     string                 `json:"currency"`
	CustomFields                 map[string]interface{} `json:"customFields,omitempty"`
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
	SoldToContact                map[string]interface{} `json:"soldToContact,omitempty"`
	TaxInfo                      *TaxInfo               `json:"taxInfo,omitempty"`
}

type CreateSubscriptionTermsInitialTermPeriodTypeEnum string

const (
	CreateSubscriptionTermsInitialTermPeriodTypeEnumMonth CreateSubscriptionTermsInitialTermPeriodTypeEnum = "Month"
	CreateSubscriptionTermsInitialTermPeriodTypeEnumYear  CreateSubscriptionTermsInitialTermPeriodTypeEnum = "Year"
	CreateSubscriptionTermsInitialTermPeriodTypeEnumDay   CreateSubscriptionTermsInitialTermPeriodTypeEnum = "Day"
	CreateSubscriptionTermsInitialTermPeriodTypeEnumWeek  CreateSubscriptionTermsInitialTermPeriodTypeEnum = "Week"
)

type CreateSubscriptionTermsInitialTermTermTypeEnum string

const (
	CreateSubscriptionTermsInitialTermTermTypeEnumTermed    CreateSubscriptionTermsInitialTermTermTypeEnum = "TERMED"
	CreateSubscriptionTermsInitialTermTermTypeEnumEvergreen CreateSubscriptionTermsInitialTermTermTypeEnum = "EVERGREEN"
)

// CreateSubscriptionTermsInitialTerm
// Information about the first term of the subscription.
type CreateSubscriptionTermsInitialTerm struct {
	Period     *int64                                            `json:"period,omitempty"`
	PeriodType *CreateSubscriptionTermsInitialTermPeriodTypeEnum `json:"periodType,omitempty"`
	StartDate  *time.Time                                        `json:"startDate,omitempty"`
	TermType   CreateSubscriptionTermsInitialTermTermTypeEnum    `json:"termType"`
}

type CreateSubscriptionTermsRenewalSettingEnum string

const (
	CreateSubscriptionTermsRenewalSettingEnumRenewWithSpecificTerm CreateSubscriptionTermsRenewalSettingEnum = "RENEW_WITH_SPECIFIC_TERM"
	CreateSubscriptionTermsRenewalSettingEnumRenewToEvergreen      CreateSubscriptionTermsRenewalSettingEnum = "RENEW_TO_EVERGREEN"
)

// CreateSubscriptionTerms
// Container for the terms and renewal settings of the subscription.
type CreateSubscriptionTerms struct {
	AutoRenew      *bool                                      `json:"autoRenew,omitempty"`
	InitialTerm    CreateSubscriptionTermsInitialTerm         `json:"initialTerm"`
	RenewalSetting *CreateSubscriptionTermsRenewalSettingEnum `json:"renewalSetting,omitempty"`
	RenewalTerms   []RenewalTerm                              `json:"renewalTerms"`
}

// CreateSubscription
// Information about an order action of type `CreateSubscription`.
type CreateSubscription struct {
	InvoiceSeparately              *bool                                          `json:"invoiceSeparately,omitempty"`
	NewSubscriptionOwnerAccount    *CreateSubscriptionNewSubscriptionOwnerAccount `json:"newSubscriptionOwnerAccount,omitempty"`
	Notes                          *string                                        `json:"notes,omitempty"`
	SubscribeToRatePlans           []RatePlanOverride                             `json:"subscribeToRatePlans,omitempty"`
	SubscriptionNumber             *string                                        `json:"subscriptionNumber,omitempty"`
	SubscriptionOwnerAccountNumber *string                                        `json:"subscriptionOwnerAccountNumber,omitempty"`
	Terms                          *CreateSubscriptionTerms                       `json:"terms,omitempty"`
}
