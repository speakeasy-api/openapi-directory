package operations

import (
	"openapi/pkg/models/shared"
)

type PostConnectionsHeaders struct {
	ContentType        string  `header:"style=simple,explode=false,name=Content-Type"`
	ZuoraEntityIds     *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID       *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	APIAccessKeyID     string  `header:"style=simple,explode=false,name=apiAccessKeyId"`
	APISecretAccessKey string  `header:"style=simple,explode=false,name=apiSecretAccessKey"`
}

type PostConnectionsRequest struct {
	Headers PostConnectionsHeaders
}

type PostConnectionsResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
