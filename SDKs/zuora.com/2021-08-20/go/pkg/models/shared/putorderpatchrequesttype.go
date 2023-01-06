package shared

type PutOrderPatchRequestTypeSubscriptionsOrderActions struct {
	CustomFields  map[string]interface{} `json:"customFields,omitempty"`
	OrderActionID *string                `json:"orderActionId,omitempty"`
	Sequence      *int64                 `json:"sequence,omitempty"`
}

type PutOrderPatchRequestTypeSubscriptions struct {
	OrderActions       []PutOrderPatchRequestTypeSubscriptionsOrderActions `json:"orderActions,omitempty"`
	SubscriptionNumber *string                                             `json:"subscriptionNumber,omitempty"`
}

type PutOrderPatchRequestType struct {
	CustomFields  map[string]interface{}                  `json:"customFields,omitempty"`
	Subscriptions []PutOrderPatchRequestTypeSubscriptions `json:"subscriptions,omitempty"`
}
