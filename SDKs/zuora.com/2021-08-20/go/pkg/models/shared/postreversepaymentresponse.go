package shared

import (
	"time"
)

type PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum string

const (
	POSTReversePaymentResponseFinanceInformationTransferredToAccountingEnumProcessing PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum = "Processing"
	POSTReversePaymentResponseFinanceInformationTransferredToAccountingEnumYes        PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum = "Yes"
	POSTReversePaymentResponseFinanceInformationTransferredToAccountingEnumNo         PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum = "No"
	POSTReversePaymentResponseFinanceInformationTransferredToAccountingEnumError      PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum = "Error"
	POSTReversePaymentResponseFinanceInformationTransferredToAccountingEnumIgnore     PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum = "Ignore"
)

// PostReversePaymentResponseFinanceInformation
// Container for the finance information related to the refund.
type PostReversePaymentResponseFinanceInformation struct {
	BankAccountAccountingCode          *string                                                                  `json:"bankAccountAccountingCode,omitempty"`
	BankAccountAccountingCodeType      *string                                                                  `json:"bankAccountAccountingCodeType,omitempty"`
	TransferredToAccounting            *PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum `json:"transferredToAccounting,omitempty"`
	UnappliedPaymentAccountingCode     *string                                                                  `json:"unappliedPaymentAccountingCode,omitempty"`
	UnappliedPaymentAccountingCodeType *string                                                                  `json:"unappliedPaymentAccountingCodeType,omitempty"`
}

type PostReversePaymentResponseGatewayStateEnum string

const (
	POSTReversePaymentResponseGatewayStateEnumMarkedForSubmission PostReversePaymentResponseGatewayStateEnum = "MarkedForSubmission"
	POSTReversePaymentResponseGatewayStateEnumSubmitted           PostReversePaymentResponseGatewayStateEnum = "Submitted"
	POSTReversePaymentResponseGatewayStateEnumSettled             PostReversePaymentResponseGatewayStateEnum = "Settled"
	POSTReversePaymentResponseGatewayStateEnumNotSubmitted        PostReversePaymentResponseGatewayStateEnum = "NotSubmitted"
	POSTReversePaymentResponseGatewayStateEnumFailedToSettle      PostReversePaymentResponseGatewayStateEnum = "FailedToSettle"
)

type PostReversePaymentResponseMethodTypeEnum string

const (
	POSTReversePaymentResponseMethodTypeEnumAch                            PostReversePaymentResponseMethodTypeEnum = "ACH"
	POSTReversePaymentResponseMethodTypeEnumCash                           PostReversePaymentResponseMethodTypeEnum = "Cash"
	POSTReversePaymentResponseMethodTypeEnumCheck                          PostReversePaymentResponseMethodTypeEnum = "Check"
	POSTReversePaymentResponseMethodTypeEnumCreditCard                     PostReversePaymentResponseMethodTypeEnum = "CreditCard"
	POSTReversePaymentResponseMethodTypeEnumPayPal                         PostReversePaymentResponseMethodTypeEnum = "PayPal"
	POSTReversePaymentResponseMethodTypeEnumWireTransfer                   PostReversePaymentResponseMethodTypeEnum = "WireTransfer"
	POSTReversePaymentResponseMethodTypeEnumDebitCard                      PostReversePaymentResponseMethodTypeEnum = "DebitCard"
	POSTReversePaymentResponseMethodTypeEnumCreditCardReferenceTransaction PostReversePaymentResponseMethodTypeEnum = "CreditCardReferenceTransaction"
	POSTReversePaymentResponseMethodTypeEnumBankTransfer                   PostReversePaymentResponseMethodTypeEnum = "BankTransfer"
	POSTReversePaymentResponseMethodTypeEnumOther                          PostReversePaymentResponseMethodTypeEnum = "Other"
)

type PostReversePaymentResponseTypeEnum string

const (
	POSTReversePaymentResponseTypeEnumExternal   PostReversePaymentResponseTypeEnum = "External"
	POSTReversePaymentResponseTypeEnumElectronic PostReversePaymentResponseTypeEnum = "Electronic"
)

type PostReversePaymentResponse struct {
	AccountID               *string                                       `json:"accountId,omitempty"`
	Amount                  *float64                                      `json:"amount,omitempty"`
	CancelledOn             *time.Time                                    `json:"cancelledOn,omitempty"`
	Comment                 *string                                       `json:"comment,omitempty"`
	CreatedByID             *string                                       `json:"createdById,omitempty"`
	CreatedDate             *time.Time                                    `json:"createdDate,omitempty"`
	CreditMemoID            *string                                       `json:"creditMemoId,omitempty"`
	FinanceInformation      *PostReversePaymentResponseFinanceInformation `json:"financeInformation,omitempty"`
	GatewayID               *string                                       `json:"gatewayId,omitempty"`
	GatewayResponse         *string                                       `json:"gatewayResponse,omitempty"`
	GatewayResponseCode     *string                                       `json:"gatewayResponseCode,omitempty"`
	GatewayState            *PostReversePaymentResponseGatewayStateEnum   `json:"gatewayState,omitempty"`
	ID                      *string                                       `json:"id,omitempty"`
	MarkedForSubmissionOn   *time.Time                                    `json:"markedForSubmissionOn,omitempty"`
	MethodType              *PostReversePaymentResponseMethodTypeEnum     `json:"methodType,omitempty"`
	Number                  *string                                       `json:"number,omitempty"`
	PaymentID               *string                                       `json:"paymentId,omitempty"`
	PaymentMethodID         *string                                       `json:"paymentMethodId,omitempty"`
	PaymentMethodSnapshotID *string                                       `json:"paymentMethodSnapshotId,omitempty"`
	ReasonCode              *string                                       `json:"reasonCode,omitempty"`
	ReferenceID             *string                                       `json:"referenceId,omitempty"`
	RefundDate              *time.Time                                    `json:"refundDate,omitempty"`
	RefundTransactionTime   *time.Time                                    `json:"refundTransactionTime,omitempty"`
	SecondRefundReferenceID *string                                       `json:"secondRefundReferenceId,omitempty"`
	SettledOn               *time.Time                                    `json:"settledOn,omitempty"`
	SoftDescriptor          *string                                       `json:"softDescriptor,omitempty"`
	SoftDescriptorPhone     *string                                       `json:"softDescriptorPhone,omitempty"`
	Status                  *string                                       `json:"status,omitempty"`
	SubmittedOn             *time.Time                                    `json:"submittedOn,omitempty"`
	Success                 *bool                                         `json:"success,omitempty"`
	Type                    *PostReversePaymentResponseTypeEnum           `json:"type,omitempty"`
	UpdatedByID             *string                                       `json:"updatedById,omitempty"`
	UpdatedDate             *time.Time                                    `json:"updatedDate,omitempty"`
}
