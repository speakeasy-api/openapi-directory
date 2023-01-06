package operations

import (
	"openapi/pkg/models/shared"
)

type PostSummaryJournalEntryHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostSummaryJournalEntryRequest struct {
	Headers PostSummaryJournalEntryHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostSummaryJournalEntryResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	POSTJournalEntryResponseType *shared.PostJournalEntryResponseType
	StatusCode                   int64
}
