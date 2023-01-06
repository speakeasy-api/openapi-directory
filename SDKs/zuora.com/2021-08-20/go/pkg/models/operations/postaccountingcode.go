package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountingCodeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostAccountingCodeRequest struct {
	Headers PostAccountingCodeHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostAccountingCodeResponse struct {
	ContentType                    string
	Headers                        map[string][]string
	POSTAccountingCodeResponseType *shared.PostAccountingCodeResponseType
	StatusCode                     int64
}
