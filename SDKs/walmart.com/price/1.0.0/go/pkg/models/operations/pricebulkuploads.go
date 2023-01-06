package operations

type PriceBulkUploadsFeedTypeEnum string

const (
	PriceBulkUploadsFeedTypeEnumPrice                PriceBulkUploadsFeedTypeEnum = "price"
	PriceBulkUploadsFeedTypeEnumCptSellerEligibility PriceBulkUploadsFeedTypeEnum = "CPT_SELLER_ELIGIBILITY"
)

type PriceBulkUploadsQueryParams struct {
	FeedType PriceBulkUploadsFeedTypeEnum `queryParam:"style=form,explode=true,name=feedType"`
}

type PriceBulkUploadsHeaders struct {
	Authorization         string  `header:"style=simple,explode=false,name=Authorization"`
	WMCONSUMERCHANNELTYPE *string `header:"style=simple,explode=false,name=WM_CONSUMER.CHANNEL.TYPE"`
	WMQOSCORRELATIONID    string  `header:"style=simple,explode=false,name=WM_QOS.CORRELATION_ID"`
	WMSECACCESSTOKEN      string  `header:"style=simple,explode=false,name=WM_SEC.ACCESS_TOKEN"`
	WMSVCNAME             string  `header:"style=simple,explode=false,name=WM_SVC.NAME"`
}

type PriceBulkUploadsRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PriceBulkUploadsRequestBody struct {
	File *PriceBulkUploadsRequestBodyFile `multipartForm:"file"`
}

type PriceBulkUploads200ApplicationJSON struct {
	AdditionalAttributes map[string]interface{} `json:"additionalAttributes,omitempty"`
	Errors               map[string]interface{} `json:"errors,omitempty"`
	FeedID               *string                `json:"feedId,omitempty"`
}

type PriceBulkUploadsRequest struct {
	QueryParams PriceBulkUploadsQueryParams
	Headers     PriceBulkUploadsHeaders
	Request     PriceBulkUploadsRequestBody `request:"mediaType=multipart/form-data"`
}

type PriceBulkUploadsResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	PriceBulkUploads200ApplicationJSONObject *PriceBulkUploads200ApplicationJSON
}
