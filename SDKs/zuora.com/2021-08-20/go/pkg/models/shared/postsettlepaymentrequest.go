package shared

import (
	"time"
)

type PostSettlePaymentRequest struct {
	SettledOn *time.Time `json:"settledOn,omitempty"`
}
