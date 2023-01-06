package shared

import (
	"time"
)

type PostGenerateBillingDocumentType struct {
	AutoPost            *bool      `json:"autoPost,omitempty"`
	AutoRenew           *bool      `json:"autoRenew,omitempty"`
	ChargeTypeToExclude []string   `json:"chargeTypeToExclude,omitempty"`
	EffectiveDate       *time.Time `json:"effectiveDate,omitempty"`
	SubscriptionIds     []string   `json:"subscriptionIds,omitempty"`
	TargetDate          *time.Time `json:"targetDate,omitempty"`
}
