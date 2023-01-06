package shared

import (
	"time"
)

type OrderStatusEnum string

const (
	OrderStatusEnumCompleted OrderStatusEnum = "Completed"
	OrderStatusEnumPending   OrderStatusEnum = "Pending"
)

type OrderSubscriptions struct {
	BaseVersion        *int64                 `json:"baseVersion,omitempty"`
	CustomFields       map[string]interface{} `json:"customFields,omitempty"`
	NewVersion         *int64                 `json:"newVersion,omitempty"`
	OrderActions       []OrderAction          `json:"orderActions,omitempty"`
	Quote              *QuoteObjectFields     `json:"quote,omitempty"`
	Ramp               map[string]interface{} `json:"ramp,omitempty"`
	Sequence           *int64                 `json:"sequence,omitempty"`
	SubscriptionNumber *string                `json:"subscriptionNumber,omitempty"`
}

// Order
// Represents the order information that will be returned in the GET call.
type Order struct {
	CreatedBy             *string                      `json:"createdBy,omitempty"`
	CreatedDate           *string                      `json:"createdDate,omitempty"`
	Currency              *string                      `json:"currency,omitempty"`
	CustomFields          map[string]interface{}       `json:"customFields,omitempty"`
	Description           *string                      `json:"description,omitempty"`
	ExistingAccountNumber *string                      `json:"existingAccountNumber,omitempty"`
	OrderDate             *time.Time                   `json:"orderDate,omitempty"`
	OrderLineItems        []OrderLineItemRetrieveOrder `json:"orderLineItems,omitempty"`
	OrderNumber           *string                      `json:"orderNumber,omitempty"`
	Status                *OrderStatusEnum             `json:"status,omitempty"`
	Subscriptions         []OrderSubscriptions         `json:"subscriptions,omitempty"`
	UpdatedBy             *string                      `json:"updatedBy,omitempty"`
	UpdatedDate           *string                      `json:"updatedDate,omitempty"`
}
