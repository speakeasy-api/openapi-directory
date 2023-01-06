package operations

type UserEmailUpdatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserEmailUpdateApplicationJSON struct {
	Email string `json:"email"`
}

type UserEmailUpdateMultipartFormData struct {
	Email string `multipartForm:"name=email"`
}

type UserEmailUpdateRequests struct {
	Object  *UserEmailUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UserEmailUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UserEmailUpdateRequest struct {
	PathParams UserEmailUpdatePathParams
	Request    UserEmailUpdateRequests
}

type UserEmailUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
