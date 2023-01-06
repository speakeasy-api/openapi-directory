package operations

type GetTaxationItemsOfCreditMemoItemPathParams struct {
	Cmitemid     string `pathParam:"style=simple,explode=false,name=cmitemid"`
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type GetTaxationItemsOfCreditMemoItemQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetTaxationItemsOfCreditMemoItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetTaxationItemsOfCreditMemoItem200ApplicationJSON struct {
	Data     []map[string]interface{} `json:"data,omitempty"`
	NextPage *string                  `json:"nextPage,omitempty"`
	Success  *bool                    `json:"success,omitempty"`
}

type GetTaxationItemsOfCreditMemoItemRequest struct {
	PathParams  GetTaxationItemsOfCreditMemoItemPathParams
	QueryParams GetTaxationItemsOfCreditMemoItemQueryParams
	Headers     GetTaxationItemsOfCreditMemoItemHeaders
}

type GetTaxationItemsOfCreditMemoItemResponse struct {
	ContentType                                              string
	GETTaxationItemsOfCreditMemoItem200ApplicationJSONObject *GetTaxationItemsOfCreditMemoItem200ApplicationJSON
	Headers                                                  map[string][]string
	StatusCode                                               int64
}
