package shared

import (
	"time"
)

type CancelSubscriptionCancellationPolicyEnum string

const (
	CancelSubscriptionCancellationPolicyEnumEndOfCurrentTerm       CancelSubscriptionCancellationPolicyEnum = "EndOfCurrentTerm"
	CancelSubscriptionCancellationPolicyEnumEndOfLastInvoicePeriod CancelSubscriptionCancellationPolicyEnum = "EndOfLastInvoicePeriod"
	CancelSubscriptionCancellationPolicyEnumSpecificDate           CancelSubscriptionCancellationPolicyEnum = "SpecificDate"
)

// CancelSubscription
// Information about an order action of type `CancelSubscription`.
type CancelSubscription struct {
	CancellationEffectiveDate *time.Time                               `json:"cancellationEffectiveDate,omitempty"`
	CancellationPolicy        CancelSubscriptionCancellationPolicyEnum `json:"cancellationPolicy"`
}
