package operations

import (
	"time"
)

type DeleteCustomObjectRecordByIDPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type DeleteCustomObjectRecordByIDHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type DeleteCustomObjectRecordByIDRequest struct {
	PathParams DeleteCustomObjectRecordByIDPathParams
	Headers    DeleteCustomObjectRecordByIDHeaders
}

type DeleteCustomObjectRecordByIDResponse struct {
	ContentType                                             string
	DeleteCustomObjectRecordByID200ApplicationJSONURIString *string
	Headers                                                 map[string][]string
	StatusCode                                              int64
}
