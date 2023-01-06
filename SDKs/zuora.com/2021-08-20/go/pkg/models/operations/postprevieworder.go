package operations

import (
	"openapi/pkg/models/shared"
)

type PostPreviewOrderHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostPreviewOrderRequest struct {
	Headers PostPreviewOrderHeaders
	Request shared.PostOrderPreviewRequestType1 `request:"mediaType=application/json"`
}

type PostPreviewOrderResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	PostOrderPreviewResponseType *shared.PostOrderPreviewResponseType
	StatusCode                   int64
}
