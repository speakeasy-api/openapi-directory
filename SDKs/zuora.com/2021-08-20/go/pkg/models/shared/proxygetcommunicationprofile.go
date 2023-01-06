package shared

import (
	"time"
)

type ProxyGetCommunicationProfile struct {
	CreatedByID *string    `json:"CreatedById,omitempty"`
	CreatedDate *time.Time `json:"CreatedDate,omitempty"`
	Description *string    `json:"Description,omitempty"`
	ID          *string    `json:"Id,omitempty"`
	ProfileName *string    `json:"ProfileName,omitempty"`
	UpdatedByID *string    `json:"UpdatedById,omitempty"`
	UpdatedDate *time.Time `json:"UpdatedDate,omitempty"`
}
