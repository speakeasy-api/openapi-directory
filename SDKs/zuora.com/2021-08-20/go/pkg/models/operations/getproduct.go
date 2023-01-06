package operations

type GetProductPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=product-id"`
}

type GetProductHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type GetProductRequest struct {
	PathParams GetProductPathParams
	Headers    GetProductHeaders
}

type GetProductResponse struct {
	ContentType    string
	GETProductType map[string]interface{}
	Headers        map[string][]string
	StatusCode     int64
}
