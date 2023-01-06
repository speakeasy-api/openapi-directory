package operations

import (
	"openapi/pkg/models/shared"
)

type ReportDailyQueryParams struct {
	Month *int64 `queryParam:"style=form,explode=true,name=month"`
	Year  *int64 `queryParam:"style=form,explode=true,name=year"`
}

type ReportDailySecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportDailyRequest struct {
	QueryParams ReportDailyQueryParams
	Security    ReportDailySecurity
}

type ReportDailyResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	ReportDaily200ApplicationJSONAny *interface{}
}
