package shared

import (
	"time"
)

type ProxyGetPaymentTransactionLogGatewayStateEnum string

const (
	ProxyGetPaymentTransactionLogGatewayStateEnumMarkedForSubmission ProxyGetPaymentTransactionLogGatewayStateEnum = "MarkedForSubmission"
	ProxyGetPaymentTransactionLogGatewayStateEnumSubmitted           ProxyGetPaymentTransactionLogGatewayStateEnum = "Submitted"
	ProxyGetPaymentTransactionLogGatewayStateEnumSettled             ProxyGetPaymentTransactionLogGatewayStateEnum = "Settled"
	ProxyGetPaymentTransactionLogGatewayStateEnumNotSubmitted        ProxyGetPaymentTransactionLogGatewayStateEnum = "NotSubmitted"
	ProxyGetPaymentTransactionLogGatewayStateEnumFailedToSettle      ProxyGetPaymentTransactionLogGatewayStateEnum = "FailedToSettle"
)

type ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum string

const (
	ProxyGetPaymentTransactionLogGatewayTransactionTypeEnumAuthorization ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum = "Authorization"
	ProxyGetPaymentTransactionLogGatewayTransactionTypeEnumSale          ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum = "Sale"
	ProxyGetPaymentTransactionLogGatewayTransactionTypeEnumVoid          ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum = "Void"
	ProxyGetPaymentTransactionLogGatewayTransactionTypeEnumInquiry       ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum = "Inquiry"
	ProxyGetPaymentTransactionLogGatewayTransactionTypeEnumVoidAuth      ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum = "VoidAuth"
)

type ProxyGetPaymentTransactionLog struct {
	AVSResponseCode              *string                                                  `json:"AVSResponseCode,omitempty"`
	BatchID                      *string                                                  `json:"BatchId,omitempty"`
	CVVResponseCode              *string                                                  `json:"CVVResponseCode,omitempty"`
	Gateway                      *string                                                  `json:"Gateway,omitempty"`
	GatewayReasonCode            *string                                                  `json:"GatewayReasonCode,omitempty"`
	GatewayReasonCodeDescription *string                                                  `json:"GatewayReasonCodeDescription,omitempty"`
	GatewayState                 *ProxyGetPaymentTransactionLogGatewayStateEnum           `json:"GatewayState,omitempty"`
	GatewayTransactionType       *ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum `json:"GatewayTransactionType,omitempty"`
	ID                           *string                                                  `json:"Id,omitempty"`
	PaymentID                    *string                                                  `json:"PaymentId,omitempty"`
	RequestString                *string                                                  `json:"RequestString,omitempty"`
	ResponseString               *string                                                  `json:"ResponseString,omitempty"`
	TransactionDate              *time.Time                                               `json:"TransactionDate,omitempty"`
	TransactionID                *string                                                  `json:"TransactionId,omitempty"`
}
