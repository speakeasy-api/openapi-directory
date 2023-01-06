package operations

import (
	"openapi/pkg/models/shared"
)

type PutUpdateEmailTemplatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutUpdateEmailTemplateHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdateEmailTemplateRequest struct {
	PathParams PutUpdateEmailTemplatePathParams
	Headers    PutUpdateEmailTemplateHeaders
	Request    shared.PutPublicEmailTemplateRequest `request:"mediaType=application/json"`
}

type PutUpdateEmailTemplateResponse struct {
	ContentType                    string
	ErrorResponse                  *shared.ErrorResponse
	GETPublicEmailTemplateResponse *shared.GetPublicEmailTemplateResponse
	Headers                        map[string][]string
	StatusCode                     int64
}
