package operations

import (
	"openapi/pkg/models/shared"
)

type PostBillingPreviewRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostBillingPreviewRun200ApplicationJSON struct {
	BillingPreviewRunID *string `json:"billingPreviewRunId,omitempty"`
	Success             *bool   `json:"success,omitempty"`
}

type PostBillingPreviewRunRequest struct {
	Headers PostBillingPreviewRunHeaders
	Request shared.PostBillingPreviewRunParam `request:"mediaType=application/json"`
}

type PostBillingPreviewRunResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	POSTBillingPreviewRun200ApplicationJSONObject *PostBillingPreviewRun200ApplicationJSON
	StatusCode                                    int64
}
