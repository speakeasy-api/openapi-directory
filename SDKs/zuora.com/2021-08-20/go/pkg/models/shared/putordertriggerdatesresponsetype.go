package shared

type PutOrderTriggerDatesResponseTypeStatusEnum string

const (
	PUTOrderTriggerDatesResponseTypeStatusEnumCompleted PutOrderTriggerDatesResponseTypeStatusEnum = "Completed"
	PUTOrderTriggerDatesResponseTypeStatusEnumPending   PutOrderTriggerDatesResponseTypeStatusEnum = "Pending"
)

type PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum string

const (
	PUTOrderTriggerDatesResponseTypeSubscriptionsStatusEnumActive            PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum = "Active"
	PUTOrderTriggerDatesResponseTypeSubscriptionsStatusEnumPendingActivation PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum = "Pending Activation"
	PUTOrderTriggerDatesResponseTypeSubscriptionsStatusEnumPendingAcceptance PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum = "Pending Acceptance"
)

type PutOrderTriggerDatesResponseTypeSubscriptions struct {
	Status             *PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum `json:"status,omitempty"`
	SubscriptionNumber *string                                                  `json:"subscriptionNumber,omitempty"`
}

type PutOrderTriggerDatesResponseType struct {
	AccountNumber *string                                         `json:"accountNumber,omitempty"`
	OrderNumber   *string                                         `json:"orderNumber,omitempty"`
	Status        *PutOrderTriggerDatesResponseTypeStatusEnum     `json:"status,omitempty"`
	Subscriptions []PutOrderTriggerDatesResponseTypeSubscriptions `json:"subscriptions,omitempty"`
}
