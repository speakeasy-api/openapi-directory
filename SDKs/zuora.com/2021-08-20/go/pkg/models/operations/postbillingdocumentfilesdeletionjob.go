package operations

import (
	"openapi/pkg/models/shared"
)

type PostBillingDocumentFilesDeletionJobHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostBillingDocumentFilesDeletionJobRequest struct {
	Headers PostBillingDocumentFilesDeletionJobHeaders
	Request shared.PostBillingDocumentFilesDeletionJobRequest `request:"mediaType=application/json"`
}

type PostBillingDocumentFilesDeletionJobResponse struct {
	ContentType                                 string
	Headers                                     map[string][]string
	POSTBillingDocumentFilesDeletionJobResponse *shared.PostBillingDocumentFilesDeletionJobResponse
	StatusCode                                  int64
}
