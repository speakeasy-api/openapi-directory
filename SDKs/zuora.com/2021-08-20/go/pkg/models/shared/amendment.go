package shared

import (
	"time"
)

// AmendmentRatePlanData
// A container for one `RatePlanData`. This field is only required if the `Type` field is set to `NewProduct`, `RemoveProduct`, or `UpdateProduct`.
type AmendmentRatePlanData struct {
	RatePlan                       RatePlan                           `json:"RatePlan"`
	RatePlanChargeData             []RatePlanChargeDataInRatePlanData `json:"RatePlanChargeData,omitempty"`
	SubscriptionProductFeatureList *SubscriptionProductFeatureList    `json:"SubscriptionProductFeatureList,omitempty"`
}

type Amendment struct {
	AutoRenew                 *bool                  `json:"AutoRenew,omitempty"`
	Code                      *string                `json:"Code,omitempty"`
	ContractEffectiveDate     time.Time              `json:"ContractEffectiveDate"`
	CreatedByID               *string                `json:"CreatedById,omitempty"`
	CreatedDate               *time.Time             `json:"CreatedDate,omitempty"`
	CurrentTerm               *int64                 `json:"CurrentTerm,omitempty"`
	CurrentTermPeriodType     *string                `json:"CurrentTermPeriodType,omitempty"`
	CustomerAcceptanceDate    *time.Time             `json:"CustomerAcceptanceDate,omitempty"`
	Description               *string                `json:"Description,omitempty"`
	DestinationAccountID      *string                `json:"DestinationAccountId,omitempty"`
	DestinationInvoiceOwnerID *string                `json:"DestinationInvoiceOwnerId,omitempty"`
	EffectiveDate             *time.Time             `json:"EffectiveDate,omitempty"`
	Name                      string                 `json:"Name"`
	RatePlanData              *AmendmentRatePlanData `json:"RatePlanData,omitempty"`
	RenewalSetting            *string                `json:"RenewalSetting,omitempty"`
	RenewalTerm               *int64                 `json:"RenewalTerm,omitempty"`
	RenewalTermPeriodType     *string                `json:"RenewalTermPeriodType,omitempty"`
	ResumeDate                *time.Time             `json:"ResumeDate,omitempty"`
	ServiceActivationDate     *time.Time             `json:"ServiceActivationDate,omitempty"`
	SpecificUpdateDate        *time.Time             `json:"SpecificUpdateDate,omitempty"`
	Status                    *string                `json:"Status,omitempty"`
	SubscriptionID            string                 `json:"SubscriptionId"`
	SuspendDate               *time.Time             `json:"SuspendDate,omitempty"`
	TermStartDate             *time.Time             `json:"TermStartDate,omitempty"`
	TermType                  *string                `json:"TermType,omitempty"`
	Type                      string                 `json:"Type"`
	UpdatedByID               *string                `json:"UpdatedById,omitempty"`
	UpdatedDate               *time.Time             `json:"UpdatedDate,omitempty"`
}
