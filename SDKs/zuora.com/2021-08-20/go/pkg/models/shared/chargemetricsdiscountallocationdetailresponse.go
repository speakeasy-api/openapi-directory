package shared

import (
	"time"
)

type ChargeMetricsDiscountAllocationDetailResponse struct {
	AmendmentID                    *string    `json:"amendmentId,omitempty"`
	AmendmentType                  *string    `json:"amendmentType,omitempty"`
	ChargeMetricsID                *string    `json:"chargeMetricsId,omitempty"`
	ChargeNumber                   *string    `json:"chargeNumber,omitempty"`
	CreatedOn                      *time.Time `json:"createdOn,omitempty"`
	Currency                       *string    `json:"currency,omitempty"`
	Deleted                        *bool      `json:"deleted,omitempty"`
	DiscountChargeNumber           *string    `json:"discountChargeNumber,omitempty"`
	DiscountMrr                    *float64   `json:"discountMrr,omitempty"`
	DiscountTcv                    *float64   `json:"discountTcv,omitempty"`
	EndDate                        *time.Time `json:"endDate,omitempty"`
	ID                             *string    `json:"id,omitempty"`
	InvoiceOwnerAccountNumber      *string    `json:"invoiceOwnerAccountNumber,omitempty"`
	ProductID                      *string    `json:"productId,omitempty"`
	ProductRatePlanChargeID        *string    `json:"productRatePlanChargeId,omitempty"`
	ProductRatePlanID              *string    `json:"productRatePlanId,omitempty"`
	RatePlanChargeID               *string    `json:"ratePlanChargeId,omitempty"`
	StartDate                      *time.Time `json:"startDate,omitempty"`
	SubscriptionName               *string    `json:"subscriptionName,omitempty"`
	SubscriptionOwnerAccountNumber *string    `json:"subscriptionOwnerAccountNumber,omitempty"`
	UpdatedOn                      *time.Time `json:"updatedOn,omitempty"`
}
