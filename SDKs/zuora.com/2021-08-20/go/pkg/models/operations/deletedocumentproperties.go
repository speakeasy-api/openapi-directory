package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDocumentPropertiesPathParams struct {
	DocumentPropertiesID string `pathParam:"style=simple,explode=false,name=documentPropertiesId"`
}

type DeleteDocumentPropertiesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteDocumentPropertiesRequest struct {
	PathParams DeleteDocumentPropertiesPathParams
	Headers    DeleteDocumentPropertiesHeaders
}

type DeleteDocumentPropertiesResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
