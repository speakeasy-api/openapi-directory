package shared

import (
	"time"
)

type PutRenewSubscriptionType struct {
	ApplicationOrder   []string   `json:"applicationOrder,omitempty"`
	ApplyCredit        *bool      `json:"applyCredit,omitempty"`
	ApplyCreditBalance *bool      `json:"applyCreditBalance,omitempty"`
	Collect            *bool      `json:"collect,omitempty"`
	DocumentDate       *time.Time `json:"documentDate,omitempty"`
	Invoice            *bool      `json:"invoice,omitempty"`
	InvoiceCollect     *bool      `json:"invoiceCollect,omitempty"`
	InvoiceTargetDate  *time.Time `json:"invoiceTargetDate,omitempty"`
	RunBilling         *bool      `json:"runBilling,omitempty"`
	TargetDate         *time.Time `json:"targetDate,omitempty"`
}
