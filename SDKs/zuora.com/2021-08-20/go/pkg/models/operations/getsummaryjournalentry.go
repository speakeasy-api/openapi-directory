package operations

type GetSummaryJournalEntryPathParams struct {
	JeNumber string `pathParam:"style=simple,explode=false,name=je-number"`
}

type GetSummaryJournalEntryHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetSummaryJournalEntryRequest struct {
	PathParams GetSummaryJournalEntryPathParams
	Headers    GetSummaryJournalEntryHeaders
}

type GetSummaryJournalEntryResponse struct {
	ContentType               string
	GETJournalEntryDetailType map[string]interface{}
	Headers                   map[string][]string
	StatusCode                int64
}
