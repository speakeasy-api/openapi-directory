package shared

type OrderActionTypeEnum string

const (
	OrderActionTypeEnumCreateSubscription OrderActionTypeEnum = "CreateSubscription"
	OrderActionTypeEnumTermsAndConditions OrderActionTypeEnum = "TermsAndConditions"
	OrderActionTypeEnumAddProduct         OrderActionTypeEnum = "AddProduct"
	OrderActionTypeEnumUpdateProduct      OrderActionTypeEnum = "UpdateProduct"
	OrderActionTypeEnumRemoveProduct      OrderActionTypeEnum = "RemoveProduct"
	OrderActionTypeEnumRenewSubscription  OrderActionTypeEnum = "RenewSubscription"
	OrderActionTypeEnumCancelSubscription OrderActionTypeEnum = "CancelSubscription"
	OrderActionTypeEnumOwnerTransfer      OrderActionTypeEnum = "OwnerTransfer"
	OrderActionTypeEnumSuspend            OrderActionTypeEnum = "Suspend"
	OrderActionTypeEnumResume             OrderActionTypeEnum = "Resume"
)

// OrderAction
// Represents the processed order action.
type OrderAction struct {
	AddProduct         *RatePlanOverride      `json:"addProduct,omitempty"`
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
