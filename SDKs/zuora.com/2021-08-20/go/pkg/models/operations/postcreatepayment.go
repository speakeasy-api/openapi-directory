package operations

type PostCreatePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCreatePaymentRequest struct {
	Headers PostCreatePaymentHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostCreatePaymentResponse struct {
	ContentType      string
	GETARPaymentType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
