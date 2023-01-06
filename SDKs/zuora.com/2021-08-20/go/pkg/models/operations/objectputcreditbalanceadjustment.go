package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutCreditBalanceAdjustmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutCreditBalanceAdjustmentQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutCreditBalanceAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutCreditBalanceAdjustmentRequest struct {
	PathParams  ObjectPutCreditBalanceAdjustmentPathParams
	QueryParams ObjectPutCreditBalanceAdjustmentQueryParams
	Headers     ObjectPutCreditBalanceAdjustmentHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutCreditBalanceAdjustmentResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
