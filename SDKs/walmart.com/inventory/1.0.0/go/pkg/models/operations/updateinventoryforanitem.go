package operations

type UpdateInventoryForAnItemQueryParams struct {
	ShipNode *string `queryParam:"style=form,explode=true,name=shipNode"`
	Sku      string  `queryParam:"style=form,explode=true,name=sku"`
}

type UpdateInventoryForAnItemHeaders struct {
	Authorization         string `header:"style=simple,explode=false,name=Authorization"`
	WMCONSUMERCHANNELTYPE string `header:"style=simple,explode=false,name=WM_CONSUMER.CHANNEL.TYPE"`
	WMQOSCORRELATIONID    string `header:"style=simple,explode=false,name=WM_QOS.CORRELATION_ID"`
	WMSECACCESSTOKEN      string `header:"style=simple,explode=false,name=WM_SEC.ACCESS_TOKEN"`
	WMSVCNAME             string `header:"style=simple,explode=false,name=WM_SVC.NAME"`
}

type UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum string

const (
	UpdateInventoryForAnItemApplicationJSONQuantityUnitEnumEach UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum = "EACH"
)

type UpdateInventoryForAnItemApplicationJSONQuantity struct {
	Amount float64                                                 `json:"amount"`
	Unit   UpdateInventoryForAnItemApplicationJSONQuantityUnitEnum `json:"unit"`
}

type UpdateInventoryForAnItemApplicationJSON struct {
	Quantity UpdateInventoryForAnItemApplicationJSONQuantity `json:"quantity"`
	Sku      string                                          `json:"sku"`
}

type UpdateInventoryForAnItemRequests struct {
	ApplicationXML []byte                                   `request:"mediaType=application/xml"`
	Object         *UpdateInventoryForAnItemApplicationJSON `request:"mediaType=application/json"`
}

type UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnum string

const (
	UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnumEach UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnum = "EACH"
)

type UpdateInventoryForAnItem200ApplicationJSONQuantity struct {
	Amount float64                                                    `json:"amount"`
	Unit   UpdateInventoryForAnItem200ApplicationJSONQuantityUnitEnum `json:"unit"`
}

type UpdateInventoryForAnItem200ApplicationJSON struct {
	Quantity UpdateInventoryForAnItem200ApplicationJSONQuantity `json:"quantity"`
	Sku      string                                             `json:"sku"`
}

type UpdateInventoryForAnItemRequest struct {
	QueryParams UpdateInventoryForAnItemQueryParams
	Headers     UpdateInventoryForAnItemHeaders
	Request     UpdateInventoryForAnItemRequests
}

type UpdateInventoryForAnItemResponse struct {
	Body                                             []byte
	ContentType                                      string
	StatusCode                                       int64
	UpdateInventoryForAnItem200ApplicationJSONObject *UpdateInventoryForAnItem200ApplicationJSON
}
