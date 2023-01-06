package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDeleteEmailTemplatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteDeleteEmailTemplateHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteDeleteEmailTemplateRequest struct {
	PathParams DeleteDeleteEmailTemplatePathParams
	Headers    DeleteDeleteEmailTemplateHeaders
}

type DeleteDeleteEmailTemplateResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	StatusCode    int64
}
