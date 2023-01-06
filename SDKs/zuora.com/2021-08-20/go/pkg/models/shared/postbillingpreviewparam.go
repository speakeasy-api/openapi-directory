package shared

import (
	"time"
)

type PostBillingPreviewParam struct {
	AccountID                      string    `json:"accountId"`
	AssumeRenewal                  *string   `json:"assumeRenewal,omitempty"`
	ChargeTypeToExclude            *string   `json:"chargeTypeToExclude,omitempty"`
	IncludingEvergreenSubscription *bool     `json:"includingEvergreenSubscription,omitempty"`
	TargetDate                     time.Time `json:"targetDate"`
}
