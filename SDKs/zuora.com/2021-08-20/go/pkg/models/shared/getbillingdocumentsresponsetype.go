package shared

import (
	"time"
)

type GetBillingDocumentsResponseTypeDocumentTypeEnum string

const (
	GETBillingDocumentsResponseTypeDocumentTypeEnumInvoice    GetBillingDocumentsResponseTypeDocumentTypeEnum = "Invoice"
	GETBillingDocumentsResponseTypeDocumentTypeEnumCreditMemo GetBillingDocumentsResponseTypeDocumentTypeEnum = "CreditMemo"
	GETBillingDocumentsResponseTypeDocumentTypeEnumDebitMemo  GetBillingDocumentsResponseTypeDocumentTypeEnum = "DebitMemo"
)

type GetBillingDocumentsResponseTypeStatusEnum string

const (
	GETBillingDocumentsResponseTypeStatusEnumDraft    GetBillingDocumentsResponseTypeStatusEnum = "Draft"
	GETBillingDocumentsResponseTypeStatusEnumPosted   GetBillingDocumentsResponseTypeStatusEnum = "Posted"
	GETBillingDocumentsResponseTypeStatusEnumCanceled GetBillingDocumentsResponseTypeStatusEnum = "Canceled"
	GETBillingDocumentsResponseTypeStatusEnumError    GetBillingDocumentsResponseTypeStatusEnum = "Error"
)

type GetBillingDocumentsResponseType struct {
	AccountID      *string                                          `json:"accountId,omitempty"`
	Amount         *float64                                         `json:"amount,omitempty"`
	Balance        *float64                                         `json:"balance,omitempty"`
	DocumentDate   *time.Time                                       `json:"documentDate,omitempty"`
	DocumentNumber *string                                          `json:"documentNumber,omitempty"`
	DocumentType   *GetBillingDocumentsResponseTypeDocumentTypeEnum `json:"documentType,omitempty"`
	ID             *string                                          `json:"id,omitempty"`
	Status         *GetBillingDocumentsResponseTypeStatusEnum       `json:"status,omitempty"`
}
