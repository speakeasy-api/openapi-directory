package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetBillingDocumentsQueryParams struct {
	AccountID    string                             `queryParam:"style=form,explode=true,name=accountId"`
	DocumentDate *time.Time                         `queryParam:"style=form,explode=true,name=documentDate"`
	PageSize     *int64                             `queryParam:"style=form,explode=true,name=pageSize"`
	Sort         *string                            `queryParam:"style=form,explode=true,name=sort"`
	Status       *shared.GlobalRequestPageSizeEnum1 `queryParam:"style=form,explode=true,name=status"`
}

type GetBillingDocumentsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetBillingDocumentsRequest struct {
	QueryParams GetBillingDocumentsQueryParams
	Headers     GetBillingDocumentsHeaders
}

type GetBillingDocumentsResponse struct {
	BillingDocumentQueryResponseElementType *shared.BillingDocumentQueryResponseElementType
	ContentType                             string
	Headers                                 map[string][]string
	StatusCode                              int64
}
