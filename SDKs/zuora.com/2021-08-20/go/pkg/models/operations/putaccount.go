package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountPathParams struct {
	AccountKey string `pathParam:"style=simple,explode=false,name=account-key"`
}

type PutAccountHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutAccountRequest struct {
	PathParams PutAccountPathParams
	Headers    PutAccountHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutAccountResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
