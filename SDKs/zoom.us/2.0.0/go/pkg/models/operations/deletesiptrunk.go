package operations

type DeleteSipTrunkPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	TrunkID   string `pathParam:"style=simple,explode=false,name=trunkId"`
}

type DeleteSipTrunkRequest struct {
	PathParams DeleteSipTrunkPathParams
}

type DeleteSipTrunkResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	DeleteSIPTrunk204ApplicationJSONObject map[string]interface{}
}
