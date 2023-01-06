package shared

import (
	"time"
)

type ProxyCreateBillRun struct {
	AccountID                   *string   `json:"AccountId,omitempty"`
	AutoEmail                   *bool     `json:"AutoEmail,omitempty"`
	AutoPost                    *bool     `json:"AutoPost,omitempty"`
	AutoRenewal                 *bool     `json:"AutoRenewal,omitempty"`
	Batch                       *string   `json:"Batch,omitempty"`
	BillCycleDay                *string   `json:"BillCycleDay,omitempty"`
	ChargeTypeToExclude         *string   `json:"ChargeTypeToExclude,omitempty"`
	InvoiceDate                 time.Time `json:"InvoiceDate"`
	NoEmailForZeroAmountInvoice *bool     `json:"NoEmailForZeroAmountInvoice,omitempty"`
	TargetDate                  time.Time `json:"TargetDate"`
}
