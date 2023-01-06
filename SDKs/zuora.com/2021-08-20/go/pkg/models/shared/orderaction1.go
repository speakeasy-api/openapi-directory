package shared

// OrderAction1
// Represents the processed order action.
type OrderAction1 struct {
	AddProduct         *RatePlanOverride1     `json:"addProduct,omitempty"`
	CancelSubscription *CancelSubscription    `json:"cancelSubscription,omitempty"`
	CreateSubscription *CreateSubscription    `json:"createSubscription,omitempty"`
	CustomFields       map[string]interface{} `json:"customFields,omitempty"`
	ID                 *string                `json:"id,omitempty"`
	OrderItems         []OrderItem            `json:"orderItems,omitempty"`
	OrderMetrics       []OrderMetric          `json:"orderMetrics,omitempty"`
	OwnerTransfer      *OwnerTransfer         `json:"ownerTransfer,omitempty"`
	RemoveProduct      *RemoveProduct         `json:"removeProduct,omitempty"`
	Resume             *GetOrderResume        `json:"resume,omitempty"`
	Sequence           *int64                 `json:"sequence,omitempty"`
	Suspend            *GetOrderSuspend       `json:"suspend,omitempty"`
	TermsAndConditions *TermsAndConditions    `json:"termsAndConditions,omitempty"`
	TriggerDates       []TriggerDate          `json:"triggerDates,omitempty"`
	Type               *OrderActionTypeEnum   `json:"type,omitempty"`
	UpdateProduct      *RatePlanUpdate        `json:"updateProduct,omitempty"`
}
