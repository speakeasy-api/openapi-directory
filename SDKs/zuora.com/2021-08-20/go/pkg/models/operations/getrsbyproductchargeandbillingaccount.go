package operations

import (
	"openapi/pkg/models/shared"
)

type GetRSbyProductChargeAndBillingAccountPathParams struct {
	AccountKey string `pathParam:"style=simple,explode=false,name=account-key"`
	ChargeKey  string `pathParam:"style=simple,explode=false,name=charge-key"`
}

type GetRSbyProductChargeAndBillingAccountQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetRSbyProductChargeAndBillingAccountHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRSbyProductChargeAndBillingAccountRequest struct {
	PathParams  GetRSbyProductChargeAndBillingAccountPathParams
	QueryParams GetRSbyProductChargeAndBillingAccountQueryParams
	Headers     GetRSbyProductChargeAndBillingAccountHeaders
}

type GetRSbyProductChargeAndBillingAccountResponse struct {
	ContentType                     string
	GETRSDetailsByProductChargeType *shared.GetrsDetailsByProductChargeType
	Headers                         map[string][]string
	StatusCode                      int64
}
