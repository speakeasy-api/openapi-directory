package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountingCodePathParams struct {
	AcID string `pathParam:"style=simple,explode=false,name=ac-id"`
}

type DeleteAccountingCodeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteAccountingCodeRequest struct {
	PathParams DeleteAccountingCodePathParams
	Headers    DeleteAccountingCodeHeaders
}

type DeleteAccountingCodeResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
