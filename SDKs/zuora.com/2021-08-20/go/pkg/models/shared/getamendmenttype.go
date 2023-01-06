package shared

import (
	"time"
)

type GetAmendmentType struct {
	AutoRenew                 *bool      `json:"autoRenew,omitempty"`
	BaseRatePlanID            *string    `json:"baseRatePlanId,omitempty"`
	BaseSubscriptionID        *string    `json:"baseSubscriptionId,omitempty"`
	Code                      *string    `json:"code,omitempty"`
	ContractEffectiveDate     *time.Time `json:"contractEffectiveDate,omitempty"`
	CurrentTerm               *int64     `json:"currentTerm,omitempty"`
	CurrentTermPeriodType     *string    `json:"currentTermPeriodType,omitempty"`
	CustomerAcceptanceDate    *time.Time `json:"customerAcceptanceDate,omitempty"`
	Description               *string    `json:"description,omitempty"`
	DestinationAccountID      *string    `json:"destinationAccountId,omitempty"`
	DestinationInvoiceOwnerID *string    `json:"destinationInvoiceOwnerId,omitempty"`
	EffectiveDate             *time.Time `json:"effectiveDate,omitempty"`
	ID                        *string    `json:"id,omitempty"`
	Name                      *string    `json:"name,omitempty"`
	NewRatePlanID             *string    `json:"newRatePlanId,omitempty"`
	NewSubscriptionID         *string    `json:"newSubscriptionId,omitempty"`
	RenewalSetting            *string    `json:"renewalSetting,omitempty"`
	RenewalTerm               *int64     `json:"renewalTerm,omitempty"`
	RenewalTermPeriodType     *string    `json:"renewalTermPeriodType,omitempty"`
	ResumeDate                *time.Time `json:"resumeDate,omitempty"`
	ServiceActivationDate     *time.Time `json:"serviceActivationDate,omitempty"`
	SpecificUpdateDate        *time.Time `json:"specificUpdateDate,omitempty"`
	Status                    *string    `json:"status,omitempty"`
	Success                   *bool      `json:"success,omitempty"`
	SuspendDate               *time.Time `json:"suspendDate,omitempty"`
	TermStartDate             *time.Time `json:"termStartDate,omitempty"`
	TermType                  *string    `json:"termType,omitempty"`
	Type                      *string    `json:"type,omitempty"`
}
