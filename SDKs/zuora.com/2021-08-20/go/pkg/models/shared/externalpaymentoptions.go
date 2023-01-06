package shared

import (
	"time"
)

type ExternalPaymentOptions struct {
	Amount          *float64   `json:"Amount,omitempty"`
	EffectiveDate   *time.Time `json:"EffectiveDate,omitempty"`
	GatewayOrderID  *string    `json:"GatewayOrderId,omitempty"`
	PaymentMethodID *string    `json:"PaymentMethodId,omitempty"`
	ReferenceID     *string    `json:"ReferenceId,omitempty"`
}
