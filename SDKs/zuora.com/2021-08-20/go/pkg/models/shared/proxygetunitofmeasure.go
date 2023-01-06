package shared

import (
	"time"
)

type ProxyGetUnitOfMeasure struct {
	Active        *bool      `json:"Active,omitempty"`
	CreatedByID   *string    `json:"CreatedById,omitempty"`
	CreatedDate   *time.Time `json:"CreatedDate,omitempty"`
	DecimalPlaces *int64     `json:"DecimalPlaces,omitempty"`
	DisplayedAs   *string    `json:"DisplayedAs,omitempty"`
	ID            *string    `json:"Id,omitempty"`
	RoundingMode  *string    `json:"RoundingMode,omitempty"`
	UomName       *string    `json:"UomName,omitempty"`
	UpdatedByID   *string    `json:"UpdatedById,omitempty"`
	UpdatedDate   *time.Time `json:"UpdatedDate,omitempty"`
}
