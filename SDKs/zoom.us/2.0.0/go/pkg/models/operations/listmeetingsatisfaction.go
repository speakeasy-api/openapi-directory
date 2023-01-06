package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListMeetingSatisfactionQueryParams struct {
	From *time.Time `queryParam:"style=form,explode=true,name=from"`
	To   *time.Time `queryParam:"style=form,explode=true,name=to"`
}

type ListMeetingSatisfactionSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListMeetingSatisfaction200ApplicationJSONClientSatisfaction struct {
	Date                *time.Time `json:"date,omitempty"`
	GoodCount           *int64     `json:"good_count,omitempty"`
	NoneCount           *int64     `json:"none_count,omitempty"`
	NotGoodCount        *int64     `json:"not_good_count,omitempty"`
	SatisfactionPercent *int64     `json:"satisfaction_percent,omitempty"`
}

type ListMeetingSatisfaction200ApplicationJSON struct {
	ClientSatisfaction []ListMeetingSatisfaction200ApplicationJSONClientSatisfaction `json:"client_satisfaction,omitempty"`
	From               *time.Time                                                    `json:"from,omitempty"`
	To                 *time.Time                                                    `json:"to,omitempty"`
	TotalRecords       *int64                                                        `json:"total_records,omitempty"`
}

type ListMeetingSatisfactionRequest struct {
	QueryParams ListMeetingSatisfactionQueryParams
	Security    ListMeetingSatisfactionSecurity
}

type ListMeetingSatisfactionResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	ListMeetingSatisfaction200ApplicationJSONObject *ListMeetingSatisfaction200ApplicationJSON
}
