package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentProperiesPathParams struct {
	DocumentID   string                               `pathParam:"style=simple,explode=false,name=documentId"`
	DocumentType shared.GlobalHeaderZuoraTrackIDEnum1 `pathParam:"style=simple,explode=false,name=documentType"`
}

type GetDocumentProperiesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetDocumentProperiesRequest struct {
	PathParams GetDocumentProperiesPathParams
	Headers    GetDocumentProperiesHeaders
}

type GetDocumentProperiesResponse struct {
	ContentType                       string
	GETDocumentPropertiesResponseType *shared.GetDocumentPropertiesResponseType
	Headers                           map[string][]string
	StatusCode                        int64
}
