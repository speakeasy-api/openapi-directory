package operations

import (
	"openapi/pkg/models/shared"
)

type PutDeactivateAccountingCodePathParams struct {
	AcID string `pathParam:"style=simple,explode=false,name=ac-id"`
}

type PutDeactivateAccountingCodeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutDeactivateAccountingCodeRequest struct {
	PathParams PutDeactivateAccountingCodePathParams
	Headers    PutDeactivateAccountingCodeHeaders
}

type PutDeactivateAccountingCodeResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
