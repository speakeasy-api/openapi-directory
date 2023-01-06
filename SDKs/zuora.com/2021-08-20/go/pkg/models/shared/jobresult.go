package shared

type JobResultOrderLineItems struct {
	ID         *string `json:"id,omitempty"`
	ItemNumber *string `json:"itemNumber,omitempty"`
}

type JobResultRamps struct {
	RampNumber         *string `json:"rampNumber,omitempty"`
	SubscriptionNumber *string `json:"subscriptionNumber,omitempty"`
}

type JobResultStatusEnum string

const (
	JobResultStatusEnumCompleted JobResultStatusEnum = "Completed"
	JobResultStatusEnumPending   JobResultStatusEnum = "Pending"
)

type JobResultSubscriptionsStatusEnum string

const (
	JobResultSubscriptionsStatusEnumActive            JobResultSubscriptionsStatusEnum = "Active"
	JobResultSubscriptionsStatusEnumPendingActivation JobResultSubscriptionsStatusEnum = "Pending Activation"
	JobResultSubscriptionsStatusEnumPendingAcceptance JobResultSubscriptionsStatusEnum = "Pending Acceptance"
	JobResultSubscriptionsStatusEnumCancelled         JobResultSubscriptionsStatusEnum = "Cancelled"
)

type JobResultSubscriptions struct {
	Status             *JobResultSubscriptionsStatusEnum `json:"status,omitempty"`
	SubscriptionNumber *string                           `json:"subscriptionNumber,omitempty"`
}

// JobResult
// **Note:** The schema of the `result` nested field is the same as the response body schema of either the ["Create an order"](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or the ["Preview an order"](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation, depending on the purpose of the job.
//
// The following schema for the nested `result` field is defined as the response body schema of "Create an order". See [Preview an Order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) for the response body schema of "Preview an order".
type JobResult struct {
	AccountID           *string                   `json:"accountId,omitempty"`
	AccountNumber       *string                   `json:"accountNumber,omitempty"`
	CreditMemoIds       []string                  `json:"creditMemoIds,omitempty"`
	CreditMemoNumbers   []string                  `json:"creditMemoNumbers,omitempty"`
	InvoiceID           *string                   `json:"invoiceId,omitempty"`
	InvoiceNumbers      []string                  `json:"invoiceNumbers,omitempty"`
	OrderID             *string                   `json:"orderId,omitempty"`
	OrderLineItems      []JobResultOrderLineItems `json:"orderLineItems,omitempty"`
	OrderNumber         *string                   `json:"orderNumber,omitempty"`
	PaidAmount          *string                   `json:"paidAmount,omitempty"`
	PaymentID           *string                   `json:"paymentId,omitempty"`
	PaymentNumber       *string                   `json:"paymentNumber,omitempty"`
	Ramps               []JobResultRamps          `json:"ramps,omitempty"`
	Status              *JobResultStatusEnum      `json:"status,omitempty"`
	SubscriptionIds     []string                  `json:"subscriptionIds,omitempty"`
	SubscriptionNumbers []string                  `json:"subscriptionNumbers,omitempty"`
	Subscriptions       []JobResultSubscriptions  `json:"subscriptions,omitempty"`
}
