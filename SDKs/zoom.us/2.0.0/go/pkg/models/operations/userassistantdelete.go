package operations

type UserAssistantDeletePathParams struct {
	AssistantID string `pathParam:"style=simple,explode=false,name=assistantId"`
	UserID      string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserAssistantDeleteRequest struct {
	PathParams UserAssistantDeletePathParams
}

type UserAssistantDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
