package shared

import (
	"time"
)

type PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum string

const (
	POSTSettlePaymentResponseFinanceInformationTransferredToAccountingEnumProcessing PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum = "Processing"
	POSTSettlePaymentResponseFinanceInformationTransferredToAccountingEnumYes        PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum = "Yes"
	POSTSettlePaymentResponseFinanceInformationTransferredToAccountingEnumNo         PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum = "No"
	POSTSettlePaymentResponseFinanceInformationTransferredToAccountingEnumError      PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum = "Error"
	POSTSettlePaymentResponseFinanceInformationTransferredToAccountingEnumIgnore     PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum = "Ignore"
)

// PostSettlePaymentResponseFinanceInformation
// Container for the finance information related to the refund.
type PostSettlePaymentResponseFinanceInformation struct {
	BankAccountAccountingCode          *string                                                                 `json:"bankAccountAccountingCode,omitempty"`
	BankAccountAccountingCodeType      *string                                                                 `json:"bankAccountAccountingCodeType,omitempty"`
	TransferredToAccounting            *PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum `json:"transferredToAccounting,omitempty"`
	UnappliedPaymentAccountingCode     *string                                                                 `json:"unappliedPaymentAccountingCode,omitempty"`
	UnappliedPaymentAccountingCodeType *string                                                                 `json:"unappliedPaymentAccountingCodeType,omitempty"`
}

type PostSettlePaymentResponseGatewayStateEnum string

const (
	POSTSettlePaymentResponseGatewayStateEnumMarkedForSubmission PostSettlePaymentResponseGatewayStateEnum = "MarkedForSubmission"
	POSTSettlePaymentResponseGatewayStateEnumSubmitted           PostSettlePaymentResponseGatewayStateEnum = "Submitted"
	POSTSettlePaymentResponseGatewayStateEnumSettled             PostSettlePaymentResponseGatewayStateEnum = "Settled"
	POSTSettlePaymentResponseGatewayStateEnumNotSubmitted        PostSettlePaymentResponseGatewayStateEnum = "NotSubmitted"
	POSTSettlePaymentResponseGatewayStateEnumFailedToSettle      PostSettlePaymentResponseGatewayStateEnum = "FailedToSettle"
)

type PostSettlePaymentResponseTypeEnum string

const (
	POSTSettlePaymentResponseTypeEnumExternal   PostSettlePaymentResponseTypeEnum = "External"
	POSTSettlePaymentResponseTypeEnumElectronic PostSettlePaymentResponseTypeEnum = "Electronic"
)

type PostSettlePaymentResponse struct {
	AccountID                *string                                      `json:"accountId,omitempty"`
	Amount                   *float64                                     `json:"amount,omitempty"`
	AppliedAmount            *float64                                     `json:"appliedAmount,omitempty"`
	AuthTransactionID        *string                                      `json:"authTransactionId,omitempty"`
	BankIdentificationNumber *string                                      `json:"bankIdentificationNumber,omitempty"`
	CancelledOn              *time.Time                                   `json:"cancelledOn,omitempty"`
	Comment                  *string                                      `json:"comment,omitempty"`
	CreatedByID              *string                                      `json:"createdById,omitempty"`
	CreatedDate              *time.Time                                   `json:"createdDate,omitempty"`
	CreditBalanceAmount      *float64                                     `json:"creditBalanceAmount,omitempty"`
	Currency                 *string                                      `json:"currency,omitempty"`
	EffectiveDate            *time.Time                                   `json:"effectiveDate,omitempty"`
	FinanceInformation       *PostSettlePaymentResponseFinanceInformation `json:"financeInformation,omitempty"`
	GatewayID                *string                                      `json:"gatewayId,omitempty"`
	GatewayOrderID           *string                                      `json:"gatewayOrderId,omitempty"`
	GatewayResponse          *string                                      `json:"gatewayResponse,omitempty"`
	GatewayResponseCode      *string                                      `json:"gatewayResponseCode,omitempty"`
	GatewayState             *PostSettlePaymentResponseGatewayStateEnum   `json:"gatewayState,omitempty"`
	ID                       *string                                      `json:"id,omitempty"`
	MarkedForSubmissionOn    *time.Time                                   `json:"markedForSubmissionOn,omitempty"`
	Number                   *string                                      `json:"number,omitempty"`
	PaymentMethodID          *string                                      `json:"paymentMethodId,omitempty"`
	PaymentMethodSnapshotID  *string                                      `json:"paymentMethodSnapshotId,omitempty"`
	ReferenceID              *string                                      `json:"referenceId,omitempty"`
	RefundAmount             *float64                                     `json:"refundAmount,omitempty"`
	SecondPaymentReferenceID *string                                      `json:"secondPaymentReferenceId,omitempty"`
	SettledOn                *time.Time                                   `json:"settledOn,omitempty"`
	SoftDescriptor           *string                                      `json:"softDescriptor,omitempty"`
	SoftDescriptorPhone      *string                                      `json:"softDescriptorPhone,omitempty"`
	Status                   *string                                      `json:"status,omitempty"`
	SubmittedOn              *time.Time                                   `json:"submittedOn,omitempty"`
	Success                  *bool                                        `json:"success,omitempty"`
	Type                     *PostSettlePaymentResponseTypeEnum           `json:"type,omitempty"`
	UnappliedAmount          *float64                                     `json:"unappliedAmount,omitempty"`
	UpdatedByID              *string                                      `json:"updatedById,omitempty"`
	UpdatedDate              *time.Time                                   `json:"updatedDate,omitempty"`
}
