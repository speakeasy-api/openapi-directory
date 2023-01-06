package operations

type GetRSbyDebitMemoItemPathParams struct {
	DmiID string `pathParam:"style=simple,explode=false,name=dmi-id"`
}

type GetRSbyDebitMemoItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRSbyDebitMemoItemRequest struct {
	PathParams GetRSbyDebitMemoItemPathParams
	Headers    GetRSbyDebitMemoItemHeaders
}

type GetRSbyDebitMemoItemResponse struct {
	ContentType     string
	GETRSDetailType map[string]interface{}
	Headers         map[string][]string
	StatusCode      int64
}
