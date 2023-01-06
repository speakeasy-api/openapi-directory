package operations

type UserDeletePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserDeleteActionEnum string

const (
	UserDeleteActionEnumDisassociate UserDeleteActionEnum = "disassociate"
	UserDeleteActionEnumDelete       UserDeleteActionEnum = "delete"
)

type UserDeleteQueryParams struct {
	Action            *UserDeleteActionEnum `queryParam:"style=form,explode=true,name=action"`
	TransferEmail     *string               `queryParam:"style=form,explode=true,name=transfer_email"`
	TransferMeeting   *bool                 `queryParam:"style=form,explode=true,name=transfer_meeting"`
	TransferRecording *bool                 `queryParam:"style=form,explode=true,name=transfer_recording"`
	TransferWebinar   *bool                 `queryParam:"style=form,explode=true,name=transfer_webinar"`
}

type UserDeleteRequest struct {
	PathParams  UserDeletePathParams
	QueryParams UserDeleteQueryParams
}

type UserDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
