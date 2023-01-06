package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateEmailTemplateHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCreateEmailTemplateRequest struct {
	Headers PostCreateEmailTemplateHeaders
	Request shared.PostPublicEmailTemplateRequest `request:"mediaType=application/json"`
}

type PostCreateEmailTemplateResponse struct {
	ContentType                    string
	ErrorResponse                  *shared.ErrorResponse
	GETPublicEmailTemplateResponse *shared.GetPublicEmailTemplateResponse
	Headers                        map[string][]string
	StatusCode                     int64
}
