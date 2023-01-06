package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostCreditBalanceAdjustmentQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostCreditBalanceAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostCreditBalanceAdjustmentRequest struct {
	QueryParams ObjectPostCreditBalanceAdjustmentQueryParams
	Headers     ObjectPostCreditBalanceAdjustmentHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPostCreditBalanceAdjustmentResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
