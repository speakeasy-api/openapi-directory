package operations

type UserAssistantsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserAssistantsUserAssistantsListAssistants struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

// UserAssistantsUserAssistantsList
// List of user's assistants.
type UserAssistantsUserAssistantsList struct {
	Assistants []UserAssistantsUserAssistantsListAssistants `json:"assistants,omitempty"`
}

type UserAssistantsRequest struct {
	PathParams UserAssistantsPathParams
}

type UserAssistantsResponse struct {
	Body               []byte
	ContentType        string
	StatusCode         int64
	UserAssistantsList *UserAssistantsUserAssistantsList
}
