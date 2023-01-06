package shared

import (
	"time"
)

type RatePlan struct {
	AmendmentID                     *string    `json:"AmendmentId,omitempty"`
	AmendmentSubscriptionRatePlanID *string    `json:"AmendmentSubscriptionRatePlanId,omitempty"`
	AmendmentType                   *string    `json:"AmendmentType,omitempty"`
	CreatedByID                     *string    `json:"CreatedById,omitempty"`
	CreatedDate                     *time.Time `json:"CreatedDate,omitempty"`
	Name                            *string    `json:"Name,omitempty"`
	ProductRatePlanID               string     `json:"ProductRatePlanId"`
	SubscriptionID                  *string    `json:"SubscriptionId,omitempty"`
	UpdatedByID                     *string    `json:"UpdatedById,omitempty"`
	UpdatedDate                     *time.Time `json:"UpdatedDate,omitempty"`
}
