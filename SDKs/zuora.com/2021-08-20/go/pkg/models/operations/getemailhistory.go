package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEmailHistoryQueryParams struct {
	EndTime       *time.Time `queryParam:"style=form,explode=true,name=endTime"`
	EventCategory *string    `queryParam:"style=form,explode=true,name=eventCategory"`
	FailedOnly    *bool      `queryParam:"style=form,explode=true,name=failedOnly"`
	ObjectID      *string    `queryParam:"style=form,explode=true,name=objectId"`
	PageSize      *int64     `queryParam:"style=form,explode=true,name=pageSize"`
	StartTime     *time.Time `queryParam:"style=form,explode=true,name=startTime"`
}

type GetEmailHistoryHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetEmailHistoryRequest struct {
	QueryParams GetEmailHistoryQueryParams
	Headers     GetEmailHistoryHeaders
}

type GetEmailHistoryResponse struct {
	ContentType            string
	GETEmailHistoryVOsType *shared.GetEmailHistoryVOsType
	Headers                map[string][]string
	StatusCode             int64
}
