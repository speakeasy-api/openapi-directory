package shared

import (
	"time"
)

type PostReversePaymentRequest struct {
	Amount              float64    `json:"amount"`
	GatewayResponse     *string    `json:"gatewayResponse,omitempty"`
	GatewayResponseCode *string    `json:"gatewayResponseCode,omitempty"`
	ReferenceID         *string    `json:"referenceId,omitempty"`
	SecondReferenceID   *string    `json:"secondReferenceId,omitempty"`
	SettledOn           *time.Time `json:"settledOn,omitempty"`
}
