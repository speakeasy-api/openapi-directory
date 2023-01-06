package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostAccountRequest struct {
	Headers PostAccountHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostAccountResponse struct {
	ContentType             string
	Headers                 map[string][]string
	POSTAccountResponseType *shared.PostAccountResponseType
	StatusCode              int64
}
