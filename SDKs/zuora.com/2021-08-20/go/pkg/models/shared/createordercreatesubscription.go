package shared

import (
	"time"
)

type CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum string

const (
	CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnumMonth CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = "Month"
	CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnumYear  CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = "Year"
	CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnumDay   CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = "Day"
	CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnumWeek  CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = "Week"
)

type CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum string

const (
	CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnumTermed    CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum = "TERMED"
	CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnumEvergreen CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum = "EVERGREEN"
)

// CreateOrderCreateSubscriptionTermsInitialTerm
// Information about the first term of the subscription.
type CreateOrderCreateSubscriptionTermsInitialTerm struct {
	Period     *int64                                                       `json:"period,omitempty"`
	PeriodType *CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum `json:"periodType,omitempty"`
	StartDate  *time.Time                                                   `json:"startDate,omitempty"`
	TermType   CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum    `json:"termType"`
}

type CreateOrderCreateSubscriptionTermsRenewalSettingEnum string

const (
	CreateOrderCreateSubscriptionTermsRenewalSettingEnumRenewWithSpecificTerm CreateOrderCreateSubscriptionTermsRenewalSettingEnum = "RENEW_WITH_SPECIFIC_TERM"
	CreateOrderCreateSubscriptionTermsRenewalSettingEnumRenewToEvergreen      CreateOrderCreateSubscriptionTermsRenewalSettingEnum = "RENEW_TO_EVERGREEN"
)

// CreateOrderCreateSubscriptionTerms
// Container for the terms and renewal settings of the subscription.
type CreateOrderCreateSubscriptionTerms struct {
	AutoRenew      *bool                                                 `json:"autoRenew,omitempty"`
	InitialTerm    CreateOrderCreateSubscriptionTermsInitialTerm         `json:"initialTerm"`
	RenewalSetting *CreateOrderCreateSubscriptionTermsRenewalSettingEnum `json:"renewalSetting,omitempty"`
	RenewalTerms   []RenewalTerm                                         `json:"renewalTerms,omitempty"`
}

// CreateOrderCreateSubscription
// Information about an order action of type `CreateSubscription`.
type CreateOrderCreateSubscription struct {
	InvoiceSeparately              *bool                               `json:"invoiceSeparately,omitempty"`
	NewSubscriptionOwnerAccount    map[string]string                   `json:"newSubscriptionOwnerAccount,omitempty"`
	Notes                          *string                             `json:"notes,omitempty"`
	SubscribeToRatePlans           []CreateOrderRatePlanOverride       `json:"subscribeToRatePlans,omitempty"`
	SubscriptionNumber             *string                             `json:"subscriptionNumber,omitempty"`
	SubscriptionOwnerAccountNumber *string                             `json:"subscriptionOwnerAccountNumber,omitempty"`
	Terms                          *CreateOrderCreateSubscriptionTerms `json:"terms,omitempty"`
}
