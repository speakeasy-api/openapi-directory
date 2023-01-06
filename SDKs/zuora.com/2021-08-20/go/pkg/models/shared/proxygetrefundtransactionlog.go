package shared

import (
	"time"
)

type ProxyGetRefundTransactionLog struct {
	BatchID                      *string    `json:"BatchId,omitempty"`
	Gateway                      *string    `json:"Gateway,omitempty"`
	GatewayReasonCode            *string    `json:"GatewayReasonCode,omitempty"`
	GatewayReasonCodeDescription *string    `json:"GatewayReasonCodeDescription,omitempty"`
	GatewayState                 *string    `json:"GatewayState,omitempty"`
	GatewayTransactionType       *string    `json:"GatewayTransactionType,omitempty"`
	ID                           *string    `json:"Id,omitempty"`
	RefundID                     *string    `json:"RefundId,omitempty"`
	RequestString                *string    `json:"RequestString,omitempty"`
	ResponseString               *string    `json:"ResponseString,omitempty"`
	TransactionDate              *time.Time `json:"TransactionDate,omitempty"`
	TransactionID                *string    `json:"TransactionId,omitempty"`
}
