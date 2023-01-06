package shared

import (
	"time"
)

type ActionAmendSubscriptionProductFeature struct {
	CreatedByID *string    `json:"CreatedById,omitempty"`
	CreatedDate *time.Time `json:"CreatedDate,omitempty"`
	Description *string    `json:"Description,omitempty"`
	FeatureCode *string    `json:"FeatureCode,omitempty"`
	FeatureID   *string    `json:"FeatureId,omitempty"`
	Name        *string    `json:"Name,omitempty"`
	RatePlanID  *string    `json:"RatePlanId,omitempty"`
	UpdatedByID *string    `json:"UpdatedById,omitempty"`
	UpdatedDate *time.Time `json:"UpdatedDate,omitempty"`
}
