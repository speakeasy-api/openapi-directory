package operations

import (
	"openapi/pkg/models/shared"
)

type PutSummaryJournalEntryPathParams struct {
	JeNumber string `pathParam:"style=simple,explode=false,name=je-number"`
}

type PutSummaryJournalEntryHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutSummaryJournalEntryRequest struct {
	PathParams PutSummaryJournalEntryPathParams
	Headers    PutSummaryJournalEntryHeaders
}

type PutSummaryJournalEntryResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
