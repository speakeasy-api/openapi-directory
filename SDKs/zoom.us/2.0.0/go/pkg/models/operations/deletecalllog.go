package operations

type DeleteCallLogPathParams struct {
	CallLogID string `pathParam:"style=simple,explode=false,name=callLogId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteCallLogRequest struct {
	PathParams DeleteCallLogPathParams
}

type DeleteCallLogResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	DeleteCallLog204ApplicationJSONAny *interface{}
}
