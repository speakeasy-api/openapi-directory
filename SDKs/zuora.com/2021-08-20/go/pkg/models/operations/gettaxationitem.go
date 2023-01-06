package operations

type GetTaxationItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTaxationItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetTaxationItemRequest struct {
	PathParams GetTaxationItemPathParams
	Headers    GetTaxationItemHeaders
}

type GetTaxationItemResponse struct {
	ContentType         string
	GETTaxationItemType map[string]interface{}
	Headers             map[string][]string
	StatusCode          int64
}
