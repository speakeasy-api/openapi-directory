package operations

type UserPasswordPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserPasswordApplicationJSON struct {
	Password string `json:"password"`
}

type UserPasswordMultipartFormData struct {
	Password string `multipartForm:"name=password"`
}

type UserPasswordRequests struct {
	Object  *UserPasswordApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UserPasswordMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UserPasswordRequest struct {
	PathParams UserPasswordPathParams
	Request    UserPasswordRequests
}

type UserPasswordResponse struct {
	ContentType string
	StatusCode  int64
}
