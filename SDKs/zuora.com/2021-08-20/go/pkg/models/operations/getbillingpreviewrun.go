package operations

import (
	"openapi/pkg/models/shared"
)

type GetBillingPreviewRunPathParams struct {
	BillingPreviewRunID string `pathParam:"style=simple,explode=false,name=billingPreviewRunId"`
}

type GetBillingPreviewRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetBillingPreviewRunRequest struct {
	PathParams GetBillingPreviewRunPathParams
	Headers    GetBillingPreviewRunHeaders
}

type GetBillingPreviewRunResponse struct {
	ContentType                  string
	GetBillingPreviewRunResponse *shared.GetBillingPreviewRunResponse
	Headers                      map[string][]string
	StatusCode                   int64
}
