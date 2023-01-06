package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateOrderAsynchronouslyQueryParams struct {
	ReturnIds *bool `queryParam:"style=form,explode=true,name=returnIds"`
}

type PostCreateOrderAsynchronouslyHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostCreateOrderAsynchronously202ApplicationJSON struct {
	JobID   *string `json:"jobId,omitempty"`
	Success *bool   `json:"success,omitempty"`
}

type PostCreateOrderAsynchronouslyRequest struct {
	QueryParams PostCreateOrderAsynchronouslyQueryParams
	Headers     PostCreateOrderAsynchronouslyHeaders
	Request     shared.PostOrderRequestType `request:"mediaType=application/json"`
}

type PostCreateOrderAsynchronouslyResponse struct {
	ContentType                                           string
	Headers                                               map[string][]string
	POSTCreateOrderAsynchronously202ApplicationJSONObject *PostCreateOrderAsynchronously202ApplicationJSON
	StatusCode                                            int64
}
