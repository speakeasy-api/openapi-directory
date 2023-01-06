package operations

import (
	"openapi/pkg/models/shared"
)

type PutBasicSummaryJournalEntryPathParams struct {
	JeNumber string `pathParam:"style=simple,explode=false,name=je-number"`
}

type PutBasicSummaryJournalEntryHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutBasicSummaryJournalEntryRequest struct {
	PathParams PutBasicSummaryJournalEntryPathParams
	Headers    PutBasicSummaryJournalEntryHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutBasicSummaryJournalEntryResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
