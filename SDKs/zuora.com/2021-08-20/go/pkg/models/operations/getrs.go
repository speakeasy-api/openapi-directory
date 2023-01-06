package operations

type GetRsPathParams struct {
	RsNumber string `pathParam:"style=simple,explode=false,name=rs-number"`
}

type GetRsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRsRequest struct {
	PathParams GetRsPathParams
	Headers    GetRsHeaders
}

type GetRsResponse struct {
	ContentType     string
	GETRSDetailType map[string]interface{}
	Headers         map[string][]string
	StatusCode      int64
}
