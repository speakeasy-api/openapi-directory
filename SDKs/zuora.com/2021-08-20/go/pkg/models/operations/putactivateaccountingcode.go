package operations

import (
	"openapi/pkg/models/shared"
)

type PutActivateAccountingCodePathParams struct {
	AcID string `pathParam:"style=simple,explode=false,name=ac-id"`
}

type PutActivateAccountingCodeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutActivateAccountingCodeRequest struct {
	PathParams PutActivateAccountingCodePathParams
	Headers    PutActivateAccountingCodeHeaders
}

type PutActivateAccountingCodeResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
