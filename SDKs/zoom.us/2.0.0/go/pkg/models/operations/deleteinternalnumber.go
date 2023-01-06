package operations

type DeleteInternalNumberPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	NumberID  string `pathParam:"style=simple,explode=false,name=numberId"`
}

type DeleteInternalNumberRequest struct {
	PathParams DeleteInternalNumberPathParams
}

type DeleteInternalNumberResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	DeleteInternalNumber204ApplicationJSONAny *interface{}
}
