package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSummaryJournalEntryPathParams struct {
	JeNumber string `pathParam:"style=simple,explode=false,name=je-number"`
}

type DeleteSummaryJournalEntryHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteSummaryJournalEntryRequest struct {
	PathParams DeleteSummaryJournalEntryPathParams
	Headers    DeleteSummaryJournalEntryHeaders
}

type DeleteSummaryJournalEntryResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
