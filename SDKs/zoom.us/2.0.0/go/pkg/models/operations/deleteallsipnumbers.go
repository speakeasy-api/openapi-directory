package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAllSipNumbersPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type DeleteAllSipNumbersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteAllSipNumbersRequest struct {
	PathParams DeleteAllSipNumbersPathParams
	Security   DeleteAllSipNumbersSecurity
}

type DeleteAllSipNumbersResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	DeleteAllSipNumbers204ApplicationJSONAny *interface{}
}
