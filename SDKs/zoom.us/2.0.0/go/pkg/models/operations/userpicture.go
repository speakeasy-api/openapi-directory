package operations

type UserPicturePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserPictureRequestBodyPicFile struct {
	Content []byte `multipartForm:"content"`
	PicFile string `multipartForm:"name=pic_file"`
}

type UserPictureRequestBody struct {
	PicFile UserPictureRequestBodyPicFile `multipartForm:"file"`
}

type UserPictureRequest struct {
	PathParams UserPicturePathParams
	Request    UserPictureRequestBody `request:"mediaType=multipart/form-data"`
}

type UserPictureResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
