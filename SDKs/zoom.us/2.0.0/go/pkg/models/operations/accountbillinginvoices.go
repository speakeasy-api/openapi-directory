package operations

import (
	"time"
)

type AccountBillingInvoicesPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountBillingInvoicesQueryParams struct {
	From *time.Time `queryParam:"style=form,explode=true,name=from"`
	To   *time.Time `queryParam:"style=form,explode=true,name=to"`
}

type AccountBillingInvoices200ApplicationJSONInvoices struct {
	Balance       *float64 `json:"balance,omitempty"`
	DueDate       *string  `json:"due_date,omitempty"`
	ID            *string  `json:"id,omitempty"`
	InvoiceDate   *string  `json:"invoice_date,omitempty"`
	InvoiceNumber *string  `json:"invoice_number,omitempty"`
	Status        *string  `json:"status,omitempty"`
	TargetDate    *string  `json:"target_date,omitempty"`
	TaxAmount     *float64 `json:"tax_amount,omitempty"`
	TotalAmount   *float64 `json:"total_amount,omitempty"`
}

type AccountBillingInvoices200ApplicationJSON struct {
	Currency *string                                            `json:"currency,omitempty"`
	Invoices []AccountBillingInvoices200ApplicationJSONInvoices `json:"invoices,omitempty"`
}

type AccountBillingInvoicesRequest struct {
	PathParams  AccountBillingInvoicesPathParams
	QueryParams AccountBillingInvoicesQueryParams
}

type AccountBillingInvoicesResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	AccountBillingInvoices200ApplicationJSONObject *AccountBillingInvoices200ApplicationJSON
}
