package shared

type SubscribeResultChargeMetricsData struct {
	ChargeMetrics []NewChargeMetrics `json:"ChargeMetrics,omitempty"`
}

type SubscribeResultCreditMemoResultCreditMemo struct {
	CreditMemoNumber *string `json:"CreditMemoNumber,omitempty"`
	ID               *string `json:"Id,omitempty"`
}

// SubscribeResultCreditMemoResult
// The result of the credit memo.
//
// **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
type SubscribeResultCreditMemoResult struct {
	CreditMemo []SubscribeResultCreditMemoResultCreditMemo `json:"CreditMemo,omitempty"`
}

type SubscribeResultInvoiceResultInvoice struct {
	ID            *string `json:"Id,omitempty"`
	InvoiceNumber *string `json:"InvoiceNumber,omitempty"`
}

type SubscribeResultInvoiceResult struct {
	Invoice []SubscribeResultInvoiceResultInvoice `json:"Invoice,omitempty"`
}

type SubscribeResult struct {
	AccountID                *string                           `json:"AccountId,omitempty"`
	AccountNumber            *string                           `json:"AccountNumber,omitempty"`
	ChargeMetricsData        *SubscribeResultChargeMetricsData `json:"ChargeMetricsData,omitempty"`
	CreditMemoData           []ActionSubscribeCreditMemoData   `json:"CreditMemoData,omitempty"`
	CreditMemoID             *string                           `json:"CreditMemoId,omitempty"`
	CreditMemoNumber         *string                           `json:"CreditMemoNumber,omitempty"`
	CreditMemoResult         *SubscribeResultCreditMemoResult  `json:"CreditMemoResult,omitempty"`
	Errors                   []ActionsErrorResponse            `json:"Errors,omitempty"`
	GatewayResponse          *string                           `json:"GatewayResponse,omitempty"`
	GatewayResponseCode      *string                           `json:"GatewayResponseCode,omitempty"`
	InvoiceData              []ActionSubscribeInvoiceData      `json:"InvoiceData,omitempty"`
	InvoiceID                *string                           `json:"InvoiceId,omitempty"`
	InvoiceNumber            *string                           `json:"InvoiceNumber,omitempty"`
	InvoiceResult            *SubscribeResultInvoiceResult     `json:"InvoiceResult,omitempty"`
	PaymentID                *string                           `json:"PaymentId,omitempty"`
	PaymentTransactionNumber *string                           `json:"PaymentTransactionNumber,omitempty"`
	SubscriptionID           *string                           `json:"SubscriptionId,omitempty"`
	SubscriptionNumber       *string                           `json:"SubscriptionNumber,omitempty"`
	Success                  *bool                             `json:"Success,omitempty"`
	TotalMrr                 *float64                          `json:"TotalMrr,omitempty"`
	TotalTcv                 *float64                          `json:"TotalTcv,omitempty"`
}
