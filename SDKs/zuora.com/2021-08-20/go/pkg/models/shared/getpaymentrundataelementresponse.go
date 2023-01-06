package shared

type GetPaymentRunDataElementResponseDocumentTypeEnum string

const (
	GETPaymentRunDataElementResponseDocumentTypeEnumInvoice   GetPaymentRunDataElementResponseDocumentTypeEnum = "Invoice"
	GETPaymentRunDataElementResponseDocumentTypeEnumDebitMemo GetPaymentRunDataElementResponseDocumentTypeEnum = "DebitMemo"
)

type GetPaymentRunDataElementResponseResultEnum string

const (
	GETPaymentRunDataElementResponseResultEnumProcessed GetPaymentRunDataElementResponseResultEnum = "Processed"
	GETPaymentRunDataElementResponseResultEnumError     GetPaymentRunDataElementResponseResultEnum = "Error"
)

type GetPaymentRunDataElementResponse struct {
	AccountID        *string                                           `json:"accountId,omitempty"`
	Amount           *float64                                          `json:"amount,omitempty"`
	AmountCollected  *float64                                          `json:"amountCollected,omitempty"`
	AmountToCollect  *float64                                          `json:"amountToCollect,omitempty"`
	Comment          *string                                           `json:"comment,omitempty"`
	DocumentID       *string                                           `json:"documentId,omitempty"`
	DocumentType     *GetPaymentRunDataElementResponseDocumentTypeEnum `json:"documentType,omitempty"`
	ErrorCode        *string                                           `json:"errorCode,omitempty"`
	ErrorMessage     *string                                           `json:"errorMessage,omitempty"`
	PaymentGatewayID *string                                           `json:"paymentGatewayId,omitempty"`
	PaymentMethodID  *string                                           `json:"paymentMethodId,omitempty"`
	Result           *GetPaymentRunDataElementResponseResultEnum       `json:"result,omitempty"`
	Transactions     []GetPaymentRunDataTransactionElementResponse     `json:"transactions,omitempty"`
}
