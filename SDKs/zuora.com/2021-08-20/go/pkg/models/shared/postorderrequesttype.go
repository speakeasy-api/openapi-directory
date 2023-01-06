package shared

import (
	"time"
)

type PostOrderRequestTypeSubscriptions struct {
	CustomFields       map[string]interface{}   `json:"customFields,omitempty"`
	OrderActions       []CreateOrderOrderAction `json:"orderActions,omitempty"`
	Quote              *QuoteObjectFields       `json:"quote,omitempty"`
	Ramp               *RampRequest             `json:"ramp,omitempty"`
	SubscriptionNumber *string                  `json:"subscriptionNumber,omitempty"`
}

type PostOrderRequestType struct {
	CustomFields          map[string]interface{}              `json:"customFields,omitempty"`
	Description           *string                             `json:"description,omitempty"`
	ExistingAccountNumber *string                             `json:"existingAccountNumber,omitempty"`
	NewAccount            map[string]string                   `json:"newAccount,omitempty"`
	OrderDate             time.Time                           `json:"orderDate"`
	OrderLineItems        []OrderLineItemCommonPostOrder      `json:"orderLineItems,omitempty"`
	OrderNumber           *string                             `json:"orderNumber,omitempty"`
	ProcessingOptions     *ProcessingOptions                  `json:"processingOptions,omitempty"`
	Subscriptions         []PostOrderRequestTypeSubscriptions `json:"subscriptions"`
}
