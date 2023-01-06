package shared

import (
	"time"
)

type ProxyGetPaymentMethodTransactionLog struct {
	Gateway                      *string    `json:"Gateway,omitempty"`
	GatewayReasonCode            *string    `json:"GatewayReasonCode,omitempty"`
	GatewayReasonCodeDescription *string    `json:"GatewayReasonCodeDescription,omitempty"`
	GatewayTransactionType       *string    `json:"GatewayTransactionType,omitempty"`
	ID                           *string    `json:"Id,omitempty"`
	PaymentMethodID              *string    `json:"PaymentMethodId,omitempty"`
	PaymentMethodType            *string    `json:"PaymentMethodType,omitempty"`
	RequestString                *string    `json:"RequestString,omitempty"`
	ResponseString               *string    `json:"ResponseString,omitempty"`
	TransactionDate              *time.Time `json:"TransactionDate,omitempty"`
	TransactionID                *string    `json:"TransactionId,omitempty"`
}
