package shared

import (
	"time"
)

type PostOrderPreviewRequestTypeSubscriptions struct {
	CustomFields       map[string]interface{}    `json:"customFields,omitempty"`
	OrderActions       []PreviewOrderOrderAction `json:"orderActions,omitempty"`
	Quote              *QuoteObjectFields        `json:"quote,omitempty"`
	Ramp               *RampRequest              `json:"ramp,omitempty"`
	SubscriptionNumber *string                   `json:"subscriptionNumber,omitempty"`
}

type PostOrderPreviewRequestType struct {
	CustomFields          map[string]interface{}                     `json:"customFields,omitempty"`
	Description           *string                                    `json:"description,omitempty"`
	ExistingAccountNumber *string                                    `json:"existingAccountNumber,omitempty"`
	OrderDate             time.Time                                  `json:"orderDate"`
	OrderLineItems        []OrderLineItemCommonPostOrder             `json:"orderLineItems,omitempty"`
	OrderNumber           *string                                    `json:"orderNumber,omitempty"`
	PreviewAccountInfo    *PreviewAccountInfo                        `json:"previewAccountInfo,omitempty"`
	PreviewOptions        PreviewOptions                             `json:"previewOptions"`
	Subscriptions         []PostOrderPreviewRequestTypeSubscriptions `json:"subscriptions"`
}
