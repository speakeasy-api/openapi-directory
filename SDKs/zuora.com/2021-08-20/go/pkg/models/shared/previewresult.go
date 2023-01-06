package shared

import (
	"time"
)

type PreviewResultChargeMetrics struct {
	Charges            []ChargePreviewMetrics `json:"charges,omitempty"`
	SubscriptionNumber *string                `json:"subscriptionNumber,omitempty"`
}

type PreviewResultCreditMemos struct {
	Amount           *float64                   `json:"amount,omitempty"`
	AmountWithoutTax *float64                   `json:"amountWithoutTax,omitempty"`
	CreditMemoItems  []InvoiceItemPreviewResult `json:"creditMemoItems,omitempty"`
	TargetDate       *time.Time                 `json:"targetDate,omitempty"`
	TaxAmount        *float64                   `json:"taxAmount,omitempty"`
}

type PreviewResultInvoices struct {
	Amount           *float64                   `json:"amount,omitempty"`
	AmountWithoutTax *float64                   `json:"amountWithoutTax,omitempty"`
	InvoiceItems     []InvoiceItemPreviewResult `json:"invoiceItems,omitempty"`
	TargetDate       *time.Time                 `json:"targetDate,omitempty"`
	TaxAmount        *float64                   `json:"taxAmount,omitempty"`
}

// PreviewResultOrderDeltaMetrics
// **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the following Order Delta Metrics objects.
// * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
// * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
// * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
//
// It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
type PreviewResultOrderDeltaMetrics struct {
	OrderDeltaMrr []OrderDeltaMrr `json:"orderDeltaMrr,omitempty"`
	OrderDeltaTcb []OrderDeltaTcb `json:"orderDeltaTcb,omitempty"`
	OrderDeltaTcv []OrderDeltaTcv `json:"orderDeltaTcv,omitempty"`
}

type PreviewResultOrderMetricsOrderActions struct {
	OrderItems   []OrderItem   `json:"orderItems,omitempty"`
	OrderMetrics []OrderMetric `json:"orderMetrics,omitempty"`
	Sequence     *string       `json:"sequence,omitempty"`
	Type         *string       `json:"type,omitempty"`
}

type PreviewResultOrderMetrics struct {
	OrderActions       []PreviewResultOrderMetricsOrderActions `json:"orderActions,omitempty"`
	SubscriptionNumber *string                                 `json:"subscriptionNumber,omitempty"`
}

// PreviewResult
// The result of each type of preview. Returned only when the current request is preview call.
type PreviewResult struct {
	ChargeMetrics     []PreviewResultChargeMetrics    `json:"chargeMetrics,omitempty"`
	CreditMemos       []PreviewResultCreditMemos      `json:"creditMemos,omitempty"`
	Invoices          []PreviewResultInvoices         `json:"invoices,omitempty"`
	OrderDeltaMetrics *PreviewResultOrderDeltaMetrics `json:"orderDeltaMetrics,omitempty"`
	OrderMetrics      []PreviewResultOrderMetrics     `json:"orderMetrics,omitempty"`
	RampMetrics       []OrderRampMetrics              `json:"rampMetrics,omitempty"`
}
