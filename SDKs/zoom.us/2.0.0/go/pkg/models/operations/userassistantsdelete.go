package operations

type UserAssistantsDeletePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserAssistantsDeleteRequest struct {
	PathParams UserAssistantsDeletePathParams
}

type UserAssistantsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
