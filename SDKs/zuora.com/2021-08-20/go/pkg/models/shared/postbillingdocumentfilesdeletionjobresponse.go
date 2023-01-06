package shared

type PostBillingDocumentFilesDeletionJobResponseStatusEnum string

const (
	POSTBillingDocumentFilesDeletionJobResponseStatusEnumPending PostBillingDocumentFilesDeletionJobResponseStatusEnum = "Pending"
)

type PostBillingDocumentFilesDeletionJobResponse struct {
	ID      *string                                                `json:"id,omitempty"`
	Status  *PostBillingDocumentFilesDeletionJobResponseStatusEnum `json:"status,omitempty"`
	Success *bool                                                  `json:"success,omitempty"`
}
