package operations

import (
	"openapi/pkg/models/shared"
)

type GetGetNotificationHistoryDeletionTaskPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetGetNotificationHistoryDeletionTaskHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetGetNotificationHistoryDeletionTaskRequest struct {
	PathParams GetGetNotificationHistoryDeletionTaskPathParams
	Headers    GetGetNotificationHistoryDeletionTaskHeaders
}

type GetGetNotificationHistoryDeletionTaskResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	Headers                                  map[string][]string
	NotificationsHistoryDeletionTaskResponse *shared.NotificationsHistoryDeletionTaskResponse
	StatusCode                               int64
}
