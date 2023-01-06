package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostImportQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostImportHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostImportRequestBodyFile struct {
	File    string `multipartForm:"name=File"`
	Content []byte `multipartForm:"content"`
}

type ObjectPostImportRequestBodyImportTypeEnum string

const (
	ObjectPOSTImportRequestBodyImportTypeEnumUsage                 ObjectPostImportRequestBodyImportTypeEnum = "Usage"
	ObjectPOSTImportRequestBodyImportTypeEnumPayment               ObjectPostImportRequestBodyImportTypeEnum = "Payment"
	ObjectPOSTImportRequestBodyImportTypeEnumQuote                 ObjectPostImportRequestBodyImportTypeEnum = "Quote"
	ObjectPOSTImportRequestBodyImportTypeEnumTaxationDetail        ObjectPostImportRequestBodyImportTypeEnum = "TaxationDetail"
	ObjectPOSTImportRequestBodyImportTypeEnumUpdateAccountingCode  ObjectPostImportRequestBodyImportTypeEnum = "UpdateAccountingCode"
	ObjectPOSTImportRequestBodyImportTypeEnumCreateRevenueSchedule ObjectPostImportRequestBodyImportTypeEnum = "CreateRevenueSchedule"
	ObjectPOSTImportRequestBodyImportTypeEnumUpdateRevenueSchedule ObjectPostImportRequestBodyImportTypeEnum = "UpdateRevenueSchedule"
	ObjectPOSTImportRequestBodyImportTypeEnumDeleteRevenueSchedule ObjectPostImportRequestBodyImportTypeEnum = "DeleteRevenueSchedule"
	ObjectPOSTImportRequestBodyImportTypeEnumImportFxRate          ObjectPostImportRequestBodyImportTypeEnum = "ImportFXRate"
)

type ObjectPostImportRequestBody struct {
	File       ObjectPostImportRequestBodyFile           `multipartForm:"file"`
	ImportType ObjectPostImportRequestBodyImportTypeEnum `multipartForm:"name=ImportType"`
	Name       string                                    `multipartForm:"name=Name"`
}

type ObjectPostImportRequest struct {
	QueryParams ObjectPostImportQueryParams
	Headers     ObjectPostImportHeaders
	Request     ObjectPostImportRequestBody `request:"mediaType=multipart/form-data"`
}

type ObjectPostImportResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyPostImport           *shared.ProxyPostImport
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
