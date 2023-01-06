package shared

type OrderActionForEvergreenTypeEnum string

const (
	OrderActionForEvergreenTypeEnumCreateSubscription OrderActionForEvergreenTypeEnum = "CreateSubscription"
	OrderActionForEvergreenTypeEnumTermsAndConditions OrderActionForEvergreenTypeEnum = "TermsAndConditions"
	OrderActionForEvergreenTypeEnumAddProduct         OrderActionForEvergreenTypeEnum = "AddProduct"
	OrderActionForEvergreenTypeEnumUpdateProduct      OrderActionForEvergreenTypeEnum = "UpdateProduct"
	OrderActionForEvergreenTypeEnumRemoveProduct      OrderActionForEvergreenTypeEnum = "RemoveProduct"
	OrderActionForEvergreenTypeEnumRenewSubscription  OrderActionForEvergreenTypeEnum = "RenewSubscription"
	OrderActionForEvergreenTypeEnumCancelSubscription OrderActionForEvergreenTypeEnum = "CancelSubscription"
	OrderActionForEvergreenTypeEnumOwnerTransfer      OrderActionForEvergreenTypeEnum = "OwnerTransfer"
	OrderActionForEvergreenTypeEnumSuspend            OrderActionForEvergreenTypeEnum = "Suspend"
	OrderActionForEvergreenTypeEnumResume             OrderActionForEvergreenTypeEnum = "Resume"
)

// OrderActionForEvergreen
// Represents the processed order action.
type OrderActionForEvergreen struct {
	AddProduct         *RatePlanOverrideForEvergreen    `json:"addProduct,omitempty"`
	CancelSubscription *CancelSubscription              `json:"cancelSubscription,omitempty"`
	CreateSubscription *CreateSubscriptionForEvergreen  `json:"createSubscription,omitempty"`
	CustomFields       map[string]interface{}           `json:"customFields,omitempty"`
	ID                 *string                          `json:"id,omitempty"`
	OrderMetrics       []OrderMetricsForEvergreen       `json:"orderMetrics,omitempty"`
	OwnerTransfer      *OwnerTransfer                   `json:"ownerTransfer,omitempty"`
	RemoveProduct      *RemoveProduct                   `json:"removeProduct,omitempty"`
	Resume             *GetOrderResume                  `json:"resume,omitempty"`
	Sequence           *int64                           `json:"sequence,omitempty"`
	Suspend            *GetOrderSuspend                 `json:"suspend,omitempty"`
	TermsAndConditions *TermsAndConditions              `json:"termsAndConditions,omitempty"`
	TriggerDates       []TriggerDate                    `json:"triggerDates,omitempty"`
	Type               *OrderActionForEvergreenTypeEnum `json:"type,omitempty"`
	UpdateProduct      *RatePlanUpdateForEvergreen      `json:"updateProduct,omitempty"`
}
