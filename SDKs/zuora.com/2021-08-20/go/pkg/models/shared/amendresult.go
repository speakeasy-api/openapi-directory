package shared

type AmendResult struct {
	AmendmentIds             []string                    `json:"AmendmentIds,omitempty"`
	ChargeMetricsData        *ChargeMetricsData          `json:"ChargeMetricsData,omitempty"`
	CreditMemoDatas          []ActionAmendCreditMemoData `json:"CreditMemoDatas,omitempty"`
	CreditMemoID             *string                     `json:"CreditMemoId,omitempty"`
	Errors                   []ActionsErrorResponse      `json:"Errors,omitempty"`
	GatewayResponse          *string                     `json:"GatewayResponse,omitempty"`
	GatewayResponseCode      *string                     `json:"GatewayResponseCode,omitempty"`
	InvoiceDatas             []ActionAmendInvoiceData    `json:"InvoiceDatas,omitempty"`
	InvoiceID                *string                     `json:"InvoiceId,omitempty"`
	PaymentID                *string                     `json:"PaymentId,omitempty"`
	PaymentTransactionNumber *string                     `json:"PaymentTransactionNumber,omitempty"`
	SubscriptionID           *string                     `json:"SubscriptionId,omitempty"`
	Success                  *bool                       `json:"Success,omitempty"`
	TotalDeltaMrr            *float64                    `json:"TotalDeltaMrr,omitempty"`
	TotalDeltaTcv            *float64                    `json:"TotalDeltaTcv,omitempty"`
}
