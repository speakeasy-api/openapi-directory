package operations

import (
	"openapi/pkg/models/shared"
)

type GetBillingDocumentFilesDeletionJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetBillingDocumentFilesDeletionJobHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetBillingDocumentFilesDeletionJobRequest struct {
	PathParams GetBillingDocumentFilesDeletionJobPathParams
	Headers    GetBillingDocumentFilesDeletionJobHeaders
}

type GetBillingDocumentFilesDeletionJobResponse struct {
	ContentType                                string
	GETBillingDocumentFilesDeletionJobResponse *shared.GetBillingDocumentFilesDeletionJobResponse
	Headers                                    map[string][]string
	StatusCode                                 int64
}
