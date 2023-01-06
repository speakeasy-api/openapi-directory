package shared

type CreateOrderOrderActionTypeEnum string

const (
	CreateOrderOrderActionTypeEnumCreateSubscription CreateOrderOrderActionTypeEnum = "CreateSubscription"
	CreateOrderOrderActionTypeEnumTermsAndConditions CreateOrderOrderActionTypeEnum = "TermsAndConditions"
	CreateOrderOrderActionTypeEnumAddProduct         CreateOrderOrderActionTypeEnum = "AddProduct"
	CreateOrderOrderActionTypeEnumUpdateProduct      CreateOrderOrderActionTypeEnum = "UpdateProduct"
	CreateOrderOrderActionTypeEnumRemoveProduct      CreateOrderOrderActionTypeEnum = "RemoveProduct"
	CreateOrderOrderActionTypeEnumRenewSubscription  CreateOrderOrderActionTypeEnum = "RenewSubscription"
	CreateOrderOrderActionTypeEnumCancelSubscription CreateOrderOrderActionTypeEnum = "CancelSubscription"
	CreateOrderOrderActionTypeEnumOwnerTransfer      CreateOrderOrderActionTypeEnum = "OwnerTransfer"
	CreateOrderOrderActionTypeEnumSuspend            CreateOrderOrderActionTypeEnum = "Suspend"
	CreateOrderOrderActionTypeEnumResume             CreateOrderOrderActionTypeEnum = "Resume"
)

type CreateOrderOrderAction struct {
	AddProduct         *CreateOrderRatePlanOverride   `json:"addProduct,omitempty"`
	CancelSubscription *CancelSubscription            `json:"cancelSubscription,omitempty"`
	CreateSubscription *CreateOrderCreateSubscription `json:"createSubscription,omitempty"`
	CustomFields       map[string]interface{}         `json:"customFields,omitempty"`
	OwnerTransfer      *OwnerTransfer                 `json:"ownerTransfer,omitempty"`
	RemoveProduct      *RemoveProduct                 `json:"removeProduct,omitempty"`
	Resume             *CreateOrderResume             `json:"resume,omitempty"`
	Suspend            *CreateOrderSuspend            `json:"suspend,omitempty"`
	TermsAndConditions *CreateOrderTermsAndConditions `json:"termsAndConditions,omitempty"`
	TriggerDates       []TriggerDate                  `json:"triggerDates,omitempty"`
	Type               CreateOrderOrderActionTypeEnum `json:"type"`
	UpdateProduct      *CreateOrderRatePlanUpdate     `json:"updateProduct,omitempty"`
}
