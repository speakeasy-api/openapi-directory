package shared

type PostOrderResponseTypeOrderLineItems struct {
	ID         *string `json:"id,omitempty"`
	ItemNumber *string `json:"itemNumber,omitempty"`
}

type PostOrderResponseTypeRamps struct {
	RampNumber         *string `json:"rampNumber,omitempty"`
	SubscriptionNumber *string `json:"subscriptionNumber,omitempty"`
}

type PostOrderResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type PostOrderResponseTypeStatusEnum string

const (
	PostOrderResponseTypeStatusEnumCompleted PostOrderResponseTypeStatusEnum = "Completed"
	PostOrderResponseTypeStatusEnumPending   PostOrderResponseTypeStatusEnum = "Pending"
)

type PostOrderResponseTypeSubscriptionsStatusEnum string

const (
	PostOrderResponseTypeSubscriptionsStatusEnumActive            PostOrderResponseTypeSubscriptionsStatusEnum = "Active"
	PostOrderResponseTypeSubscriptionsStatusEnumPendingActivation PostOrderResponseTypeSubscriptionsStatusEnum = "Pending Activation"
	PostOrderResponseTypeSubscriptionsStatusEnumPendingAcceptance PostOrderResponseTypeSubscriptionsStatusEnum = "Pending Acceptance"
	PostOrderResponseTypeSubscriptionsStatusEnumCancelled         PostOrderResponseTypeSubscriptionsStatusEnum = "Cancelled"
	PostOrderResponseTypeSubscriptionsStatusEnumSuspended         PostOrderResponseTypeSubscriptionsStatusEnum = "Suspended"
)

type PostOrderResponseTypeSubscriptions struct {
	Status             *PostOrderResponseTypeSubscriptionsStatusEnum `json:"status,omitempty"`
	SubscriptionID     *string                                       `json:"subscriptionId,omitempty"`
	SubscriptionNumber *string                                       `json:"subscriptionNumber,omitempty"`
}

type PostOrderResponseType struct {
	AccountID           *string                               `json:"accountId,omitempty"`
	AccountNumber       *string                               `json:"accountNumber,omitempty"`
	CreditMemoIds       []string                              `json:"creditMemoIds,omitempty"`
	CreditMemoNumbers   []string                              `json:"creditMemoNumbers,omitempty"`
	InvoiceIds          []string                              `json:"invoiceIds,omitempty"`
	InvoiceNumbers      []string                              `json:"invoiceNumbers,omitempty"`
	OrderID             *string                               `json:"orderId,omitempty"`
	OrderLineItems      []PostOrderResponseTypeOrderLineItems `json:"orderLineItems,omitempty"`
	OrderNumber         *string                               `json:"orderNumber,omitempty"`
	PaidAmount          *string                               `json:"paidAmount,omitempty"`
	PaymentID           *string                               `json:"paymentId,omitempty"`
	PaymentNumber       *string                               `json:"paymentNumber,omitempty"`
	ProcessID           *string                               `json:"processId,omitempty"`
	Ramps               []PostOrderResponseTypeRamps          `json:"ramps,omitempty"`
	Reasons             []PostOrderResponseTypeReasons        `json:"reasons,omitempty"`
	Status              *PostOrderResponseTypeStatusEnum      `json:"status,omitempty"`
	SubscriptionIds     []string                              `json:"subscriptionIds,omitempty"`
	SubscriptionNumbers []string                              `json:"subscriptionNumbers,omitempty"`
	Subscriptions       []PostOrderResponseTypeSubscriptions  `json:"subscriptions,omitempty"`
	Success             *bool                                 `json:"success,omitempty"`
}
