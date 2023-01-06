package operations

import (
	"openapi/pkg/models/shared"
)

type PostDocumentPropertiesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostDocumentPropertiesRequest struct {
	Headers PostDocumentPropertiesHeaders
	Request shared.PostDocumentPropertiesType `request:"mediaType=application/json"`
}

type PostDocumentPropertiesResponse struct {
	ContentType                       string
	GETDocumentPropertiesResponseType *shared.GetDocumentPropertiesResponseType
	Headers                           map[string][]string
	StatusCode                        int64
}
