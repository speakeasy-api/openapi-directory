package operations

type GetFilesPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=file-id"`
}

type GetFilesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetFilesRequest struct {
	PathParams GetFilesPathParams
	Headers    GetFilesHeaders
}

type GetFilesResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
