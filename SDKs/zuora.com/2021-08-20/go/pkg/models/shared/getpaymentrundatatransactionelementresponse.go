package shared

type GetPaymentRunDataTransactionElementResponseStatusEnum string

const (
	GETPaymentRunDataTransactionElementResponseStatusEnumProcessed  GetPaymentRunDataTransactionElementResponseStatusEnum = "Processed"
	GETPaymentRunDataTransactionElementResponseStatusEnumProcessing GetPaymentRunDataTransactionElementResponseStatusEnum = "Processing"
	GETPaymentRunDataTransactionElementResponseStatusEnumError      GetPaymentRunDataTransactionElementResponseStatusEnum = "Error"
)

type GetPaymentRunDataTransactionElementResponseTypeEnum string

const (
	GETPaymentRunDataTransactionElementResponseTypeEnumPayment                 GetPaymentRunDataTransactionElementResponseTypeEnum = "Payment"
	GETPaymentRunDataTransactionElementResponseTypeEnumCreditMemo              GetPaymentRunDataTransactionElementResponseTypeEnum = "CreditMemo"
	GETPaymentRunDataTransactionElementResponseTypeEnumUnappliedPayment        GetPaymentRunDataTransactionElementResponseTypeEnum = "UnappliedPayment"
	GETPaymentRunDataTransactionElementResponseTypeEnumCreditBalanceAdjustment GetPaymentRunDataTransactionElementResponseTypeEnum = "CreditBalanceAdjustment"
)

type GetPaymentRunDataTransactionElementResponse struct {
	Amount        *float64                                               `json:"amount,omitempty"`
	AppliedAmount *float64                                               `json:"appliedAmount,omitempty"`
	ErrorCode     *string                                                `json:"errorCode,omitempty"`
	ErrorMessage  *string                                                `json:"errorMessage,omitempty"`
	ID            *string                                                `json:"id,omitempty"`
	Status        *GetPaymentRunDataTransactionElementResponseStatusEnum `json:"status,omitempty"`
	Type          *GetPaymentRunDataTransactionElementResponseTypeEnum   `json:"type,omitempty"`
}
