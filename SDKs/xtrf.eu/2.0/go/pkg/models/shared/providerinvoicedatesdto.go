// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ProviderInvoiceDatesDTO struct {
	DraftDate           *TimeDTO `json:"draftDate,omitempty"`
	FinalDate           *TimeDTO `json:"finalDate,omitempty"`
	InvoiceUploadedDate *TimeDTO `json:"invoiceUploadedDate,omitempty"`
	PaymentDueDate      *TimeDTO `json:"paymentDueDate,omitempty"`
}
