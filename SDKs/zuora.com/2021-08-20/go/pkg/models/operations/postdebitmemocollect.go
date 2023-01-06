package operations

import (
	"openapi/pkg/models/shared"
)

type PostDebitMemoCollectPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type PostDebitMemoCollectHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostDebitMemoCollect200ApplicationJSONAppliedCreditMemos struct {
	AppliedAmount   *float64 `json:"appliedAmount,omitempty"`
	ID              *string  `json:"id,omitempty"`
	Number          *string  `json:"number,omitempty"`
	UnappliedAmount *float64 `json:"unappliedAmount,omitempty"`
}

type PostDebitMemoCollect200ApplicationJSONAppliedPayments struct {
	AppliedAmount   *float64 `json:"appliedAmount,omitempty"`
	ID              *string  `json:"id,omitempty"`
	Number          *string  `json:"number,omitempty"`
	UnappliedAmount *float64 `json:"unappliedAmount,omitempty"`
}

// PostDebitMemoCollect200ApplicationJSONDebitMemo
// The information about the debit memo that just collected.
type PostDebitMemoCollect200ApplicationJSONDebitMemo struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type PostDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum string

const (
	POSTDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnumProcessing PostDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum = "Processing"
	POSTDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnumProcessed  PostDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum = "Processed"
	POSTDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnumError      PostDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum = "Error"
	POSTDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnumCanceled   PostDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum = "Canceled"
)

// PostDebitMemoCollect200ApplicationJSONProcessedPayment
// The information about the payment that newly processed to the debit memo.
type PostDebitMemoCollect200ApplicationJSONProcessedPayment struct {
	Amount              *float64                                                          `json:"amount,omitempty"`
	GatewayID           *string                                                           `json:"gatewayId,omitempty"`
	GatewayResponse     *string                                                           `json:"gatewayResponse,omitempty"`
	GatewayResponseCode *string                                                           `json:"gatewayResponseCode,omitempty"`
	ID                  *string                                                           `json:"id,omitempty"`
	Number              *string                                                           `json:"number,omitempty"`
	PaymentMethodID     *string                                                           `json:"paymentMethodId,omitempty"`
	Status              *PostDebitMemoCollect200ApplicationJSONProcessedPaymentStatusEnum `json:"status,omitempty"`
}

type PostDebitMemoCollect200ApplicationJSON struct {
	AppliedCreditMemos []PostDebitMemoCollect200ApplicationJSONAppliedCreditMemos `json:"appliedCreditMemos,omitempty"`
	AppliedPayments    []PostDebitMemoCollect200ApplicationJSONAppliedPayments    `json:"appliedPayments,omitempty"`
	DebitMemo          *PostDebitMemoCollect200ApplicationJSONDebitMemo           `json:"debitMemo,omitempty"`
	ProcessedPayment   *PostDebitMemoCollect200ApplicationJSONProcessedPayment    `json:"processedPayment,omitempty"`
	Success            *bool                                                      `json:"success,omitempty"`
}

type PostDebitMemoCollectRequest struct {
	PathParams PostDebitMemoCollectPathParams
	Headers    PostDebitMemoCollectHeaders
	Request    shared.DebitMemoCollectRequest `request:"mediaType=application/json"`
}

type PostDebitMemoCollectResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	POSTDebitMemoCollect200ApplicationJSONObject *PostDebitMemoCollect200ApplicationJSON
	StatusCode                                   int64
}
