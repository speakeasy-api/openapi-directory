package shared

type GetBillingDocumentFilesDeletionJobResponseStatusEnum string

const (
	GETBillingDocumentFilesDeletionJobResponseStatusEnumPending    GetBillingDocumentFilesDeletionJobResponseStatusEnum = "Pending"
	GETBillingDocumentFilesDeletionJobResponseStatusEnumProcessing GetBillingDocumentFilesDeletionJobResponseStatusEnum = "Processing"
	GETBillingDocumentFilesDeletionJobResponseStatusEnumCompleted  GetBillingDocumentFilesDeletionJobResponseStatusEnum = "Completed"
	GETBillingDocumentFilesDeletionJobResponseStatusEnumError      GetBillingDocumentFilesDeletionJobResponseStatusEnum = "Error"
)

type GetBillingDocumentFilesDeletionJobResponse struct {
	ID      *string                                               `json:"id,omitempty"`
	Status  *GetBillingDocumentFilesDeletionJobResponseStatusEnum `json:"status,omitempty"`
	Success *bool                                                 `json:"success,omitempty"`
}
