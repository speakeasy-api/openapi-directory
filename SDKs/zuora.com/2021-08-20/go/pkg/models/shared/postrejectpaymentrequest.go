package shared

import (
	"time"
)

type PostRejectPaymentRequest struct {
	GatewayResponse     *string    `json:"gatewayResponse,omitempty"`
	GatewayResponseCode *string    `json:"gatewayResponseCode,omitempty"`
	ReferenceID         *string    `json:"referenceId,omitempty"`
	SecondReferenceID   *string    `json:"secondReferenceId,omitempty"`
	SettledOn           *time.Time `json:"settledOn,omitempty"`
}
