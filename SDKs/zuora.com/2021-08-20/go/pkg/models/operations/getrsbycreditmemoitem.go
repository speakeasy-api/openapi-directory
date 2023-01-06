package operations

type GetRSbyCreditMemoItemPathParams struct {
	CmiID string `pathParam:"style=simple,explode=false,name=cmi-id"`
}

type GetRSbyCreditMemoItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRSbyCreditMemoItemRequest struct {
	PathParams GetRSbyCreditMemoItemPathParams
	Headers    GetRSbyCreditMemoItemHeaders
}

type GetRSbyCreditMemoItemResponse struct {
	ContentType     string
	GETRSDetailType map[string]interface{}
	Headers         map[string][]string
	StatusCode      int64
}
