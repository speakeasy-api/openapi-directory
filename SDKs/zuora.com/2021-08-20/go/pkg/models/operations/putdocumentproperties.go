package operations

import (
	"openapi/pkg/models/shared"
)

type PutDocumentPropertiesPathParams struct {
	DocumentPropertiesID string `pathParam:"style=simple,explode=false,name=documentPropertiesId"`
}

type PutDocumentPropertiesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutDocumentPropertiesRequest struct {
	PathParams PutDocumentPropertiesPathParams
	Headers    PutDocumentPropertiesHeaders
	Request    shared.PutDocumentPropertiesType `request:"mediaType=application/json"`
}

type PutDocumentPropertiesResponse struct {
	ContentType                       string
	GETDocumentPropertiesResponseType *shared.GetDocumentPropertiesResponseType
	Headers                           map[string][]string
	StatusCode                        int64
}
