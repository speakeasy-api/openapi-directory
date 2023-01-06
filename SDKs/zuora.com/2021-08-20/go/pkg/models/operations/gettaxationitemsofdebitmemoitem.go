package operations

type GetTaxationItemsOfDebitMemoItemPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
	Dmitemid    string `pathParam:"style=simple,explode=false,name=dmitemid"`
}

type GetTaxationItemsOfDebitMemoItemQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetTaxationItemsOfDebitMemoItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetTaxationItemsOfDebitMemoItem200ApplicationJSON struct {
	Data     []map[string]interface{} `json:"data,omitempty"`
	NextPage *string                  `json:"nextPage,omitempty"`
	Success  *bool                    `json:"success,omitempty"`
}

type GetTaxationItemsOfDebitMemoItemRequest struct {
	PathParams  GetTaxationItemsOfDebitMemoItemPathParams
	QueryParams GetTaxationItemsOfDebitMemoItemQueryParams
	Headers     GetTaxationItemsOfDebitMemoItemHeaders
}

type GetTaxationItemsOfDebitMemoItemResponse struct {
	ContentType                                             string
	GETTaxationItemsOfDebitMemoItem200ApplicationJSONObject *GetTaxationItemsOfDebitMemoItem200ApplicationJSON
	Headers                                                 map[string][]string
	StatusCode                                              int64
}
