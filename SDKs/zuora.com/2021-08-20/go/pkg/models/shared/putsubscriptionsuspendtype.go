package shared

import (
	"time"
)

type PutSubscriptionSuspendType struct {
	ApplicationOrder      []string   `json:"applicationOrder,omitempty"`
	ApplyCredit           *bool      `json:"applyCredit,omitempty"`
	ApplyCreditBalance    *bool      `json:"applyCreditBalance,omitempty"`
	Collect               *bool      `json:"collect,omitempty"`
	ContractEffectiveDate *time.Time `json:"contractEffectiveDate,omitempty"`
	DocumentDate          *time.Time `json:"documentDate,omitempty"`
	ExtendsTerm           *bool      `json:"extendsTerm,omitempty"`
	Invoice               *bool      `json:"invoice,omitempty"`
	InvoiceCollect        *bool      `json:"invoiceCollect,omitempty"`
	InvoiceTargetDate     *time.Time `json:"invoiceTargetDate,omitempty"`
	Resume                *bool      `json:"resume,omitempty"`
	ResumePeriods         *string    `json:"resumePeriods,omitempty"`
	ResumePeriodsType     *string    `json:"resumePeriodsType,omitempty"`
	ResumePolicy          *string    `json:"resumePolicy,omitempty"`
	ResumeSpecificDate    *time.Time `json:"resumeSpecificDate,omitempty"`
	RunBilling            *bool      `json:"runBilling,omitempty"`
	SuspendPeriods        *string    `json:"suspendPeriods,omitempty"`
	SuspendPeriodsType    *string    `json:"suspendPeriodsType,omitempty"`
	SuspendPolicy         string     `json:"suspendPolicy"`
	SuspendSpecificDate   *time.Time `json:"suspendSpecificDate,omitempty"`
	TargetDate            *time.Time `json:"targetDate,omitempty"`
}
