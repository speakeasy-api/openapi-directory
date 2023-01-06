package shared

type PreviewOrderOrderActionTypeEnum string

const (
	PreviewOrderOrderActionTypeEnumCreateSubscription PreviewOrderOrderActionTypeEnum = "CreateSubscription"
	PreviewOrderOrderActionTypeEnumTermsAndConditions PreviewOrderOrderActionTypeEnum = "TermsAndConditions"
	PreviewOrderOrderActionTypeEnumAddProduct         PreviewOrderOrderActionTypeEnum = "AddProduct"
	PreviewOrderOrderActionTypeEnumUpdateProduct      PreviewOrderOrderActionTypeEnum = "UpdateProduct"
	PreviewOrderOrderActionTypeEnumRemoveProduct      PreviewOrderOrderActionTypeEnum = "RemoveProduct"
	PreviewOrderOrderActionTypeEnumRenewSubscription  PreviewOrderOrderActionTypeEnum = "RenewSubscription"
	PreviewOrderOrderActionTypeEnumCancelSubscription PreviewOrderOrderActionTypeEnum = "CancelSubscription"
	PreviewOrderOrderActionTypeEnumOwnerTransfer      PreviewOrderOrderActionTypeEnum = "OwnerTransfer"
	PreviewOrderOrderActionTypeEnumSuspend            PreviewOrderOrderActionTypeEnum = "Suspend"
	PreviewOrderOrderActionTypeEnumResume             PreviewOrderOrderActionTypeEnum = "Resume"
)

type PreviewOrderOrderAction struct {
	AddProduct         *PreviewOrderRatePlanOverride   `json:"addProduct,omitempty"`
	CancelSubscription *CancelSubscription             `json:"cancelSubscription,omitempty"`
	CreateSubscription *PreviewOrderCreateSubscription `json:"createSubscription,omitempty"`
	CustomFields       map[string]interface{}          `json:"customFields,omitempty"`
	OwnerTransfer      *OwnerTransfer                  `json:"ownerTransfer,omitempty"`
	RemoveProduct      *RemoveProduct                  `json:"removeProduct,omitempty"`
	Resume             *CreateOrderResume              `json:"resume,omitempty"`
	Suspend            *CreateOrderSuspend             `json:"suspend,omitempty"`
	TermsAndConditions *CreateOrderTermsAndConditions  `json:"termsAndConditions,omitempty"`
	TriggerDates       []TriggerDate                   `json:"triggerDates,omitempty"`
	Type               PreviewOrderOrderActionTypeEnum `json:"type"`
	UpdateProduct      *PreviewOrderRatePlanUpdate     `json:"updateProduct,omitempty"`
}
