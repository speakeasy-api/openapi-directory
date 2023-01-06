package operations

import (
	"openapi/pkg/models/shared"
)

type GetGetEmailTemplatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetGetEmailTemplateHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetGetEmailTemplateRequest struct {
	PathParams GetGetEmailTemplatePathParams
	Headers    GetGetEmailTemplateHeaders
}

type GetGetEmailTemplateResponse struct {
	ContentType                    string
	ErrorResponse                  *shared.ErrorResponse
	GETPublicEmailTemplateResponse *shared.GetPublicEmailTemplateResponse
	Headers                        map[string][]string
	StatusCode                     int64
}
