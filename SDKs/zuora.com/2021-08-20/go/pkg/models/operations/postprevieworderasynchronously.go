package operations

import (
	"openapi/pkg/models/shared"
)

type PostPreviewOrderAsynchronouslyHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostPreviewOrderAsynchronously202ApplicationJSON struct {
	JobID *string `json:"jobId,omitempty"`
}

type PostPreviewOrderAsynchronouslyRequest struct {
	Headers PostPreviewOrderAsynchronouslyHeaders
	Request shared.PostOrderPreviewRequestType `request:"mediaType=application/json"`
}

type PostPreviewOrderAsynchronouslyResponse struct {
	ContentType                                            string
	Headers                                                map[string][]string
	POSTPreviewOrderAsynchronously202ApplicationJSONObject *PostPreviewOrderAsynchronously202ApplicationJSON
	StatusCode                                             int64
}
