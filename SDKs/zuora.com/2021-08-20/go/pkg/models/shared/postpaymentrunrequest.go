package shared

import (
	"time"
)

type PostPaymentRunRequest struct {
	AccountID                  *string                            `json:"accountId,omitempty"`
	ApplyCreditBalance         *bool                              `json:"applyCreditBalance,omitempty"`
	AutoApplyCreditMemo        *bool                              `json:"autoApplyCreditMemo,omitempty"`
	AutoApplyUnappliedPayment  *bool                              `json:"autoApplyUnappliedPayment,omitempty"`
	Batch                      *string                            `json:"batch,omitempty"`
	BillCycleDay               *string                            `json:"billCycleDay,omitempty"`
	BillingRunID               *string                            `json:"billingRunId,omitempty"`
	CollectPayment             *bool                              `json:"collectPayment,omitempty"`
	ConsolidatedPayment        *bool                              `json:"consolidatedPayment,omitempty"`
	Currency                   *string                            `json:"currency,omitempty"`
	Data                       []PostPaymentRunDataElementRequest `json:"data,omitempty"`
	PaymentGatewayID           *string                            `json:"paymentGatewayId,omitempty"`
	ProcessPaymentWithClosedPM *bool                              `json:"processPaymentWithClosedPM,omitempty"`
	RunDate                    *time.Time                         `json:"runDate,omitempty"`
	TargetDate                 *time.Time                         `json:"targetDate,omitempty"`
}
