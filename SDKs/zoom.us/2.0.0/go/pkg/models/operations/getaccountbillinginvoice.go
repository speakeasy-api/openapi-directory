package operations

import (
	"time"
)

type GetAccountBillingInvoicePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type GetAccountBillingInvoice200ApplicationJSONInvoiceItems struct {
	ChargeName   *string    `json:"charge_name,omitempty"`
	ChargeNumber *string    `json:"charge_number,omitempty"`
	ChargeType   *string    `json:"charge_type,omitempty"`
	EndDate      *time.Time `json:"end_date,omitempty"`
	Quantity     *int64     `json:"quantity,omitempty"`
	StartDate    *time.Time `json:"start_date,omitempty"`
	TaxAmount    *float64   `json:"tax_amount,omitempty"`
	TotalAmount  *float64   `json:"total_amount,omitempty"`
}

type GetAccountBillingInvoice200ApplicationJSON struct {
	Balance       *float64                                                 `json:"balance,omitempty"`
	Currency      *string                                                  `json:"currency,omitempty"`
	DueDate       *string                                                  `json:"due_date,omitempty"`
	ID            *string                                                  `json:"id,omitempty"`
	InvoiceDate   *string                                                  `json:"invoice_date,omitempty"`
	InvoiceItems  []GetAccountBillingInvoice200ApplicationJSONInvoiceItems `json:"invoice_items,omitempty"`
	InvoiceNumber *string                                                  `json:"invoice_number,omitempty"`
	Status        *string                                                  `json:"status,omitempty"`
	TargetDate    *string                                                  `json:"target_date,omitempty"`
	TaxAmount     *float64                                                 `json:"tax_amount,omitempty"`
	TotalAmount   *float64                                                 `json:"total_amount,omitempty"`
}

type GetAccountBillingInvoiceRequest struct {
	PathParams GetAccountBillingInvoicePathParams
}

type GetAccountBillingInvoiceResponse struct {
	Body                                             []byte
	ContentType                                      string
	StatusCode                                       int64
	GetAccountBillingInvoice200ApplicationJSONObject *GetAccountBillingInvoice200ApplicationJSON
}
