package operations

type PutTaxationItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutTaxationItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutTaxationItemRequest struct {
	PathParams PutTaxationItemPathParams
	Headers    PutTaxationItemHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutTaxationItemResponse struct {
	ContentType         string
	GETTaxationItemType map[string]interface{}
	Headers             map[string][]string
	StatusCode          int64
}
