package shared

import (
	"time"
)

type PostSubscriptionCancellationType struct {
	ApplicationOrder          []string   `json:"applicationOrder,omitempty"`
	ApplyCredit               *bool      `json:"applyCredit,omitempty"`
	ApplyCreditBalance        *bool      `json:"applyCreditBalance,omitempty"`
	CancellationEffectiveDate *time.Time `json:"cancellationEffectiveDate,omitempty"`
	CancellationPolicy        string     `json:"cancellationPolicy"`
	Collect                   *bool      `json:"collect,omitempty"`
	ContractEffectiveDate     *time.Time `json:"contractEffectiveDate,omitempty"`
	DocumentDate              *time.Time `json:"documentDate,omitempty"`
	Invoice                   *bool      `json:"invoice,omitempty"`
	InvoiceCollect            bool       `json:"invoiceCollect"`
	InvoiceTargetDate         *time.Time `json:"invoiceTargetDate,omitempty"`
	RunBilling                *bool      `json:"runBilling,omitempty"`
	TargetDate                *time.Time `json:"targetDate,omitempty"`
}
