package shared

import (
	"time"
)

type PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum string

const (
	POSTReconcileRefundResponseFinanceInformationTransferredToAccountingEnumProcessing PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum = "Processing"
	POSTReconcileRefundResponseFinanceInformationTransferredToAccountingEnumYes        PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum = "Yes"
	POSTReconcileRefundResponseFinanceInformationTransferredToAccountingEnumNo         PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum = "No"
	POSTReconcileRefundResponseFinanceInformationTransferredToAccountingEnumError      PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum = "Error"
	POSTReconcileRefundResponseFinanceInformationTransferredToAccountingEnumIgnore     PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum = "Ignore"
)

// PostReconcileRefundResponseFinanceInformation
// Container for the finance information related to the refund.
type PostReconcileRefundResponseFinanceInformation struct {
	BankAccountAccountingCode          *string                                                                   `json:"bankAccountAccountingCode,omitempty"`
	BankAccountAccountingCodeType      *string                                                                   `json:"bankAccountAccountingCodeType,omitempty"`
	TransferredToAccounting            *PostReconcileRefundResponseFinanceInformationTransferredToAccountingEnum `json:"transferredToAccounting,omitempty"`
	UnappliedPaymentAccountingCode     *string                                                                   `json:"unappliedPaymentAccountingCode,omitempty"`
	UnappliedPaymentAccountingCodeType *string                                                                   `json:"unappliedPaymentAccountingCodeType,omitempty"`
}

type PostReconcileRefundResponseGatewayStateEnum string

const (
	POSTReconcileRefundResponseGatewayStateEnumSettled        PostReconcileRefundResponseGatewayStateEnum = "Settled"
	POSTReconcileRefundResponseGatewayStateEnumFailedToSettle PostReconcileRefundResponseGatewayStateEnum = "FailedToSettle"
)

type PostReconcileRefundResponseMethodTypeEnum string

const (
	POSTReconcileRefundResponseMethodTypeEnumAch                            PostReconcileRefundResponseMethodTypeEnum = "ACH"
	POSTReconcileRefundResponseMethodTypeEnumCash                           PostReconcileRefundResponseMethodTypeEnum = "Cash"
	POSTReconcileRefundResponseMethodTypeEnumCheck                          PostReconcileRefundResponseMethodTypeEnum = "Check"
	POSTReconcileRefundResponseMethodTypeEnumCreditCard                     PostReconcileRefundResponseMethodTypeEnum = "CreditCard"
	POSTReconcileRefundResponseMethodTypeEnumPayPal                         PostReconcileRefundResponseMethodTypeEnum = "PayPal"
	POSTReconcileRefundResponseMethodTypeEnumWireTransfer                   PostReconcileRefundResponseMethodTypeEnum = "WireTransfer"
	POSTReconcileRefundResponseMethodTypeEnumDebitCard                      PostReconcileRefundResponseMethodTypeEnum = "DebitCard"
	POSTReconcileRefundResponseMethodTypeEnumCreditCardReferenceTransaction PostReconcileRefundResponseMethodTypeEnum = "CreditCardReferenceTransaction"
	POSTReconcileRefundResponseMethodTypeEnumBankTransfer                   PostReconcileRefundResponseMethodTypeEnum = "BankTransfer"
	POSTReconcileRefundResponseMethodTypeEnumOther                          PostReconcileRefundResponseMethodTypeEnum = "Other"
)

type PostReconcileRefundResponseTypeEnum string

const (
	POSTReconcileRefundResponseTypeEnumExternal   PostReconcileRefundResponseTypeEnum = "External"
	POSTReconcileRefundResponseTypeEnumElectronic PostReconcileRefundResponseTypeEnum = "Electronic"
)

type PostReconcileRefundResponse struct {
	AccountID                   *string                                        `json:"accountId,omitempty"`
	Amount                      *float64                                       `json:"amount,omitempty"`
	CancelledOn                 *time.Time                                     `json:"cancelledOn,omitempty"`
	Comment                     *string                                        `json:"comment,omitempty"`
	CreatedByID                 *string                                        `json:"createdById,omitempty"`
	CreatedDate                 *time.Time                                     `json:"createdDate,omitempty"`
	CreditMemoID                *string                                        `json:"creditMemoId,omitempty"`
	FinanceInformation          *PostReconcileRefundResponseFinanceInformation `json:"financeInformation,omitempty"`
	GatewayID                   *string                                        `json:"gatewayId,omitempty"`
	GatewayReconciliationReason *string                                        `json:"gatewayReconciliationReason,omitempty"`
	GatewayReconciliationStatus *string                                        `json:"gatewayReconciliationStatus,omitempty"`
	GatewayResponse             *string                                        `json:"gatewayResponse,omitempty"`
	GatewayResponseCode         *string                                        `json:"gatewayResponseCode,omitempty"`
	GatewayState                *PostReconcileRefundResponseGatewayStateEnum   `json:"gatewayState,omitempty"`
	ID                          *string                                        `json:"id,omitempty"`
	MarkedForSubmissionOn       *time.Time                                     `json:"markedForSubmissionOn,omitempty"`
	MethodType                  *PostReconcileRefundResponseMethodTypeEnum     `json:"methodType,omitempty"`
	Number                      *string                                        `json:"number,omitempty"`
	PaymentID                   *string                                        `json:"paymentId,omitempty"`
	PaymentMethodID             *string                                        `json:"paymentMethodId,omitempty"`
	PaymentMethodSnapshotID     *string                                        `json:"paymentMethodSnapshotId,omitempty"`
	PayoutID                    *string                                        `json:"payoutId,omitempty"`
	ReasonCode                  *string                                        `json:"reasonCode,omitempty"`
	ReferenceID                 *string                                        `json:"referenceId,omitempty"`
	RefundDate                  *time.Time                                     `json:"refundDate,omitempty"`
	RefundTransactionTime       *time.Time                                     `json:"refundTransactionTime,omitempty"`
	SecondRefundReferenceID     *string                                        `json:"secondRefundReferenceId,omitempty"`
	SettledOn                   *time.Time                                     `json:"settledOn,omitempty"`
	SoftDescriptor              *string                                        `json:"softDescriptor,omitempty"`
	SoftDescriptorPhone         *string                                        `json:"softDescriptorPhone,omitempty"`
	Status                      *string                                        `json:"status,omitempty"`
	SubmittedOn                 *time.Time                                     `json:"submittedOn,omitempty"`
	Success                     *bool                                          `json:"success,omitempty"`
	Type                        *PostReconcileRefundResponseTypeEnum           `json:"type,omitempty"`
	UpdatedByID                 *string                                        `json:"updatedById,omitempty"`
	UpdatedDate                 *time.Time                                     `json:"updatedDate,omitempty"`
}
