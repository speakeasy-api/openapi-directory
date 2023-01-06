package shared

import (
	"time"
)

type ChargeMetricsResponse struct {
	AmendmentID                    *string    `json:"amendmentId,omitempty"`
	AmendmentType                  *string    `json:"amendmentType,omitempty"`
	ChargeNumber                   *string    `json:"chargeNumber,omitempty"`
	CreatedOn                      *time.Time `json:"createdOn,omitempty"`
	Currency                       *string    `json:"currency,omitempty"`
	Deleted                        *bool      `json:"deleted,omitempty"`
	EndDate                        *time.Time `json:"endDate,omitempty"`
	ID                             *string    `json:"id,omitempty"`
	InvoiceOwnerAccountNumber      *string    `json:"invoiceOwnerAccountNumber,omitempty"`
	MrrDiscountAmount              *float64   `json:"mrrDiscountAmount,omitempty"`
	MrrGrossAmount                 *float64   `json:"mrrGrossAmount,omitempty"`
	MrrNetAmount                   *float64   `json:"mrrNetAmount,omitempty"`
	ProductID                      *string    `json:"productId,omitempty"`
	ProductRatePlanChargeID        *string    `json:"productRatePlanChargeId,omitempty"`
	ProductRatePlanID              *string    `json:"productRatePlanId,omitempty"`
	RatePlanChargeID               *string    `json:"ratePlanChargeId,omitempty"`
	StartDate                      *time.Time `json:"startDate,omitempty"`
	SubscriptionName               *string    `json:"subscriptionName,omitempty"`
	SubscriptionOwnerAccountNumber *string    `json:"subscriptionOwnerAccountNumber,omitempty"`
	TcvDiscountAmount              *float64   `json:"tcvDiscountAmount,omitempty"`
	TcvGrossAmount                 *float64   `json:"tcvGrossAmount,omitempty"`
	TcvNetAmount                   *float64   `json:"tcvNetAmount,omitempty"`
	UpdatedOn                      *time.Time `json:"updatedOn,omitempty"`
}
