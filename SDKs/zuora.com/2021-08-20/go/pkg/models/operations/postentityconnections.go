package operations

import (
	"openapi/pkg/models/shared"
)

type PostEntityConnectionsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostEntityConnectionsRequest struct {
	Headers PostEntityConnectionsHeaders
	Request *shared.PostEntityConnectionsType `request:"mediaType=application/json"`
}

type PostEntityConnectionsResponse struct {
	ContentType                       string
	Headers                           map[string][]string
	POSTEntityConnectionsResponseType *shared.PostEntityConnectionsResponseType
	StatusCode                        int64
}
