package shared

type PostPaymentRunDataElementRequestDocumentTypeEnum string

const (
	POSTPaymentRunDataElementRequestDocumentTypeEnumInvoice   PostPaymentRunDataElementRequestDocumentTypeEnum = "Invoice"
	POSTPaymentRunDataElementRequestDocumentTypeEnumDebitMemo PostPaymentRunDataElementRequestDocumentTypeEnum = "DebitMemo"
)

type PostPaymentRunDataElementRequest struct {
	AccountID        string                                            `json:"accountId"`
	Amount           *float64                                          `json:"amount,omitempty"`
	Comment          *string                                           `json:"comment,omitempty"`
	DocumentID       *string                                           `json:"documentId,omitempty"`
	DocumentType     *PostPaymentRunDataElementRequestDocumentTypeEnum `json:"documentType,omitempty"`
	PaymentGatewayID *string                                           `json:"paymentGatewayId,omitempty"`
	PaymentMethodID  *string                                           `json:"paymentMethodId,omitempty"`
}
