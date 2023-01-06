package operations

import (
	"openapi/pkg/models/shared"
)

type PutRevProAccountingCodesHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutRevProAccountingCodesRequest struct {
	Headers PutRevProAccountingCodesHeaders
	Request shared.RevproAccountingCodes `request:"mediaType=application/json"`
}

type PutRevProAccountingCodesResponse struct {
	ContentType              string
	Headers                  map[string][]string
	PUTRevproAccCodeResponse *shared.PutRevproAccCodeResponse
	StatusCode               int64
}
