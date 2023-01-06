package shared

type OrderForEvergreenSubscriptions struct {
	BaseVersion        *int64                    `json:"baseVersion,omitempty"`
	CustomFields       map[string]interface{}    `json:"customFields,omitempty"`
	NewVersion         *int64                    `json:"newVersion,omitempty"`
	OrderActions       []OrderActionForEvergreen `json:"orderActions,omitempty"`
	Quote              *QuoteObjectFields        `json:"quote,omitempty"`
	Sequence           *int64                    `json:"sequence,omitempty"`
	SubscriptionNumber *string                   `json:"subscriptionNumber,omitempty"`
}

// OrderForEvergreen
// Represents the order information that will be returned in the GET call.
type OrderForEvergreen struct {
	CreatedBy             *string                          `json:"createdBy,omitempty"`
	CreatedDate           *string                          `json:"createdDate,omitempty"`
	Currency              *string                          `json:"currency,omitempty"`
	CustomFields          map[string]interface{}           `json:"customFields,omitempty"`
	Description           *string                          `json:"description,omitempty"`
	ExistingAccountNumber *string                          `json:"existingAccountNumber,omitempty"`
	OrderDate             *string                          `json:"orderDate,omitempty"`
	OrderNumber           *string                          `json:"orderNumber,omitempty"`
	Status                *string                          `json:"status,omitempty"`
	Subscriptions         []OrderForEvergreenSubscriptions `json:"subscriptions,omitempty"`
	UpdatedBy             *string                          `json:"updatedBy,omitempty"`
	UpdatedDate           *string                          `json:"updatedDate,omitempty"`
}
