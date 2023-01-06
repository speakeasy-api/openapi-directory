package shared

import (
	"time"
)

type GetMassUpdateType struct {
	ActionType     *string    `json:"actionType,omitempty"`
	EndedOn        *time.Time `json:"endedOn,omitempty"`
	ErrorCount     *string    `json:"errorCount,omitempty"`
	InputSize      *int64     `json:"inputSize,omitempty"`
	OutputSize     *int64     `json:"outputSize,omitempty"`
	OutputType     *string    `json:"outputType,omitempty"`
	OutputURL      *string    `json:"outputURL,omitempty"`
	ProcessedCount *string    `json:"processedCount,omitempty"`
	StartedOn      *time.Time `json:"startedOn,omitempty"`
	Status         *string    `json:"status,omitempty"`
	Success        *bool      `json:"success,omitempty"`
	SuccessCount   *string    `json:"successCount,omitempty"`
	TotalCount     *string    `json:"totalCount,omitempty"`
	UploadedBy     *string    `json:"uploadedBy,omitempty"`
	UploadedOn     *time.Time `json:"uploadedOn,omitempty"`
}
