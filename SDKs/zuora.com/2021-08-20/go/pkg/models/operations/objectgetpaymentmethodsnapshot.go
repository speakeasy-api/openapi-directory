package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetPaymentMethodSnapshotPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetPaymentMethodSnapshotQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetPaymentMethodSnapshotHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetPaymentMethodSnapshotRequest struct {
	PathParams  ObjectGetPaymentMethodSnapshotPathParams
	QueryParams ObjectGetPaymentMethodSnapshotQueryParams
	Headers     ObjectGetPaymentMethodSnapshotHeaders
}

type ObjectGetPaymentMethodSnapshotResponse struct {
	ContentType                   string
	Headers                       map[string][]string
	ProxyGetPaymentMethodSnapshot *shared.ProxyGetPaymentMethodSnapshot
	ProxyNoDataResponse           *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse     *shared.ProxyUnauthorizedResponse
	StatusCode                    int64
}
