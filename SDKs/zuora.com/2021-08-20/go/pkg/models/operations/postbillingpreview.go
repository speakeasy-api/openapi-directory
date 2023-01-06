package operations

import (
	"openapi/pkg/models/shared"
)

type PostBillingPreviewHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostBillingPreviewRequest struct {
	Headers PostBillingPreviewHeaders
	Request shared.PostBillingPreviewParam `request:"mediaType=application/json"`
}

type PostBillingPreviewResponse struct {
	BillingPreviewResult *shared.BillingPreviewResult
	ContentType          string
	Headers              map[string][]string
	StatusCode           int64
}
