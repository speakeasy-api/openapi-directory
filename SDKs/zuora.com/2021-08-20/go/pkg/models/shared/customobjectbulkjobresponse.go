package shared

import (
	"time"
)

type CustomObjectBulkJobResponseError struct {
	Code    *int64  `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type CustomObjectBulkJobResponseNamespaceEnum string

const (
	CustomObjectBulkJobResponseNamespaceEnumDefault  CustomObjectBulkJobResponseNamespaceEnum = "default"
	CustomObjectBulkJobResponseNamespaceEnumComZuora CustomObjectBulkJobResponseNamespaceEnum = "com_zuora"
)

type CustomObjectBulkJobResponseOperationEnum string

const (
	CustomObjectBulkJobResponseOperationEnumDelete CustomObjectBulkJobResponseOperationEnum = "delete"
	CustomObjectBulkJobResponseOperationEnumCreate CustomObjectBulkJobResponseOperationEnum = "create"
)

type CustomObjectBulkJobResponseStatusEnum string

const (
	CustomObjectBulkJobResponseStatusEnumOpen       CustomObjectBulkJobResponseStatusEnum = "open"
	CustomObjectBulkJobResponseStatusEnumPending    CustomObjectBulkJobResponseStatusEnum = "pending"
	CustomObjectBulkJobResponseStatusEnumInProgress CustomObjectBulkJobResponseStatusEnum = "in_progress"
	CustomObjectBulkJobResponseStatusEnumCompleted  CustomObjectBulkJobResponseStatusEnum = "completed"
	CustomObjectBulkJobResponseStatusEnumFailed     CustomObjectBulkJobResponseStatusEnum = "failed"
	CustomObjectBulkJobResponseStatusEnumCancelled  CustomObjectBulkJobResponseStatusEnum = "cancelled"
)

type CustomObjectBulkJobResponse struct {
	CreatedByID      *string                                   `json:"CreatedById,omitempty"`
	CreatedDate      *time.Time                                `json:"CreatedDate,omitempty"`
	ID               *string                                   `json:"Id,omitempty"`
	UpdatedByID      *string                                   `json:"UpdatedById,omitempty"`
	UpdatedDate      *time.Time                                `json:"UpdatedDate,omitempty"`
	Error            *CustomObjectBulkJobResponseError         `json:"error,omitempty"`
	Namespace        *CustomObjectBulkJobResponseNamespaceEnum `json:"namespace,omitempty"`
	Object           *string                                   `json:"object,omitempty"`
	Operation        *CustomObjectBulkJobResponseOperationEnum `json:"operation,omitempty"`
	ProcessingTime   *int64                                    `json:"processingTime,omitempty"`
	RecordsProcessed *int64                                    `json:"recordsProcessed,omitempty"`
	Status           *CustomObjectBulkJobResponseStatusEnum    `json:"status,omitempty"`
}
