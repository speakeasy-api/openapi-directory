package shared

import (
	"time"
)

type GetRevenueItemTypeResponse struct {
	AccountingPeriodEndDate   *time.Time `json:"accountingPeriodEndDate,omitempty"`
	AccountingPeriodName      *string    `json:"accountingPeriodName,omitempty"`
	AccountingPeriodStartDate *time.Time `json:"accountingPeriodStartDate,omitempty"`
	Amount                    *string    `json:"amount,omitempty"`
	Currency                  *string    `json:"currency,omitempty"`
	IsAccountingPeriodClosed  *bool      `json:"isAccountingPeriodClosed,omitempty"`
}
