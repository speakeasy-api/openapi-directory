package shared

type PutOrderTriggerDatesResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

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
	ProcessID     *string                                         `json:"processId,omitempty"`
	Reasons       []PutOrderTriggerDatesResponseTypeReasons       `json:"reasons,omitempty"`
	Status        *PutOrderTriggerDatesResponseTypeStatusEnum     `json:"status,omitempty"`
	Subscriptions []PutOrderTriggerDatesResponseTypeSubscriptions `json:"subscriptions,omitempty"`
	Success       *bool                                           `json:"success,omitempty"`
}
