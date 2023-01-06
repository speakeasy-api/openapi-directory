package shared

import (
	"time"
)

type PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum string

const (
	POSTRejectPaymentResponseFinanceInformationTransferredToAccountingEnumProcessing PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum = "Processing"
	POSTRejectPaymentResponseFinanceInformationTransferredToAccountingEnumYes        PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum = "Yes"
	POSTRejectPaymentResponseFinanceInformationTransferredToAccountingEnumNo         PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum = "No"
	POSTRejectPaymentResponseFinanceInformationTransferredToAccountingEnumError      PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum = "Error"
	POSTRejectPaymentResponseFinanceInformationTransferredToAccountingEnumIgnore     PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum = "Ignore"
)

// PostRejectPaymentResponseFinanceInformation
// Container for the finance information related to the refund.
type PostRejectPaymentResponseFinanceInformation struct {
	BankAccountAccountingCode          *string                                                                 `json:"bankAccountAccountingCode,omitempty"`
	BankAccountAccountingCodeType      *string                                                                 `json:"bankAccountAccountingCodeType,omitempty"`
	TransferredToAccounting            *PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum `json:"transferredToAccounting,omitempty"`
	UnappliedPaymentAccountingCode     *string                                                                 `json:"unappliedPaymentAccountingCode,omitempty"`
	UnappliedPaymentAccountingCodeType *string                                                                 `json:"unappliedPaymentAccountingCodeType,omitempty"`
}

type PostRejectPaymentResponseGatewayStateEnum string

const (
	POSTRejectPaymentResponseGatewayStateEnumMarkedForSubmission PostRejectPaymentResponseGatewayStateEnum = "MarkedForSubmission"
	POSTRejectPaymentResponseGatewayStateEnumSubmitted           PostRejectPaymentResponseGatewayStateEnum = "Submitted"
	POSTRejectPaymentResponseGatewayStateEnumSettled             PostRejectPaymentResponseGatewayStateEnum = "Settled"
	POSTRejectPaymentResponseGatewayStateEnumNotSubmitted        PostRejectPaymentResponseGatewayStateEnum = "NotSubmitted"
	POSTRejectPaymentResponseGatewayStateEnumFailedToSettle      PostRejectPaymentResponseGatewayStateEnum = "FailedToSettle"
)

type PostRejectPaymentResponseMethodTypeEnum string

const (
	POSTRejectPaymentResponseMethodTypeEnumAch                            PostRejectPaymentResponseMethodTypeEnum = "ACH"
	POSTRejectPaymentResponseMethodTypeEnumCash                           PostRejectPaymentResponseMethodTypeEnum = "Cash"
	POSTRejectPaymentResponseMethodTypeEnumCheck                          PostRejectPaymentResponseMethodTypeEnum = "Check"
	POSTRejectPaymentResponseMethodTypeEnumCreditCard                     PostRejectPaymentResponseMethodTypeEnum = "CreditCard"
	POSTRejectPaymentResponseMethodTypeEnumPayPal                         PostRejectPaymentResponseMethodTypeEnum = "PayPal"
	POSTRejectPaymentResponseMethodTypeEnumWireTransfer                   PostRejectPaymentResponseMethodTypeEnum = "WireTransfer"
	POSTRejectPaymentResponseMethodTypeEnumDebitCard                      PostRejectPaymentResponseMethodTypeEnum = "DebitCard"
	POSTRejectPaymentResponseMethodTypeEnumCreditCardReferenceTransaction PostRejectPaymentResponseMethodTypeEnum = "CreditCardReferenceTransaction"
	POSTRejectPaymentResponseMethodTypeEnumBankTransfer                   PostRejectPaymentResponseMethodTypeEnum = "BankTransfer"
	POSTRejectPaymentResponseMethodTypeEnumOther                          PostRejectPaymentResponseMethodTypeEnum = "Other"
)

type PostRejectPaymentResponseTypeEnum string

const (
	POSTRejectPaymentResponseTypeEnumExternal   PostRejectPaymentResponseTypeEnum = "External"
	POSTRejectPaymentResponseTypeEnumElectronic PostRejectPaymentResponseTypeEnum = "Electronic"
)

type PostRejectPaymentResponse struct {
	AccountID               *string                                      `json:"accountId,omitempty"`
	Amount                  *float64                                     `json:"amount,omitempty"`
	CancelledOn             *time.Time                                   `json:"cancelledOn,omitempty"`
	Comment                 *string                                      `json:"comment,omitempty"`
	CreatedByID             *string                                      `json:"createdById,omitempty"`
	CreatedDate             *time.Time                                   `json:"createdDate,omitempty"`
	CreditMemoID            *string                                      `json:"creditMemoId,omitempty"`
	FinanceInformation      *PostRejectPaymentResponseFinanceInformation `json:"financeInformation,omitempty"`
	GatewayID               *string                                      `json:"gatewayId,omitempty"`
	GatewayResponse         *string                                      `json:"gatewayResponse,omitempty"`
	GatewayResponseCode     *string                                      `json:"gatewayResponseCode,omitempty"`
	GatewayState            *PostRejectPaymentResponseGatewayStateEnum   `json:"gatewayState,omitempty"`
	ID                      *string                                      `json:"id,omitempty"`
	MarkedForSubmissionOn   *time.Time                                   `json:"markedForSubmissionOn,omitempty"`
	MethodType              *PostRejectPaymentResponseMethodTypeEnum     `json:"methodType,omitempty"`
	Number                  *string                                      `json:"number,omitempty"`
	PaymentID               *string                                      `json:"paymentId,omitempty"`
	PaymentMethodID         *string                                      `json:"paymentMethodId,omitempty"`
	PaymentMethodSnapshotID *string                                      `json:"paymentMethodSnapshotId,omitempty"`
	ReasonCode              *string                                      `json:"reasonCode,omitempty"`
	ReferenceID             *string                                      `json:"referenceId,omitempty"`
	RefundDate              *time.Time                                   `json:"refundDate,omitempty"`
	RefundTransactionTime   *time.Time                                   `json:"refundTransactionTime,omitempty"`
	SecondRefundReferenceID *string                                      `json:"secondRefundReferenceId,omitempty"`
	SettledOn               *time.Time                                   `json:"settledOn,omitempty"`
	SoftDescriptor          *string                                      `json:"softDescriptor,omitempty"`
	SoftDescriptorPhone     *string                                      `json:"softDescriptorPhone,omitempty"`
	Status                  *string                                      `json:"status,omitempty"`
	SubmittedOn             *time.Time                                   `json:"submittedOn,omitempty"`
	Success                 *bool                                        `json:"success,omitempty"`
	Type                    *PostRejectPaymentResponseTypeEnum           `json:"type,omitempty"`
	UpdatedByID             *string                                      `json:"updatedById,omitempty"`
	UpdatedDate             *time.Time                                   `json:"updatedDate,omitempty"`
}
