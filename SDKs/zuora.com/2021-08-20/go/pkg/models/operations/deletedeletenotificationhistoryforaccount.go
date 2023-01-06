package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDeleteNotificationHistoryForAccountQueryParams struct {
	AccountID string `queryParam:"style=form,explode=true,name=accountId"`
}

type DeleteDeleteNotificationHistoryForAccountHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteDeleteNotificationHistoryForAccountRequest struct {
	QueryParams DeleteDeleteNotificationHistoryForAccountQueryParams
	Headers     DeleteDeleteNotificationHistoryForAccountHeaders
}

type DeleteDeleteNotificationHistoryForAccountResponse struct {
	ContentType                                                       string
	DELETEDELETENotificationHistoryForAccount400ApplicationJSONString *string
	ErrorResponse                                                     *shared.ErrorResponse
	Headers                                                           map[string][]string
	NotificationsHistoryDeletionTaskResponse                          *shared.NotificationsHistoryDeletionTaskResponse
	StatusCode                                                        int64
}
