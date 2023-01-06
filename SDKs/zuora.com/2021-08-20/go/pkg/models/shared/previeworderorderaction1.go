package shared

type PreviewOrderOrderAction1 struct {
	AddProduct         *PreviewOrderRatePlanOverride1  `json:"addProduct,omitempty"`
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
