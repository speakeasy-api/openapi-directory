package operations

type GetDescribePathParams struct {
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type GetDescribeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetDescribeRequest struct {
	PathParams GetDescribePathParams
	Headers    GetDescribeHeaders
}

type GetDescribeResponse struct {
	ContentType                 string
	GETDescribe200TextXMLString *string
	GETDescribe404TextXMLString *string
	Headers                     map[string][]string
	StatusCode                  int64
}
