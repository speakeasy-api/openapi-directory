package operations

import (
	"openapi/pkg/models/shared"
)

type PostEmailBillingDocumentsfromBillRunPathParams struct {
	BillRunID string `pathParam:"style=simple,explode=false,name=billRunId"`
}

type PostEmailBillingDocumentsfromBillRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostEmailBillingDocumentsfromBillRunRequest struct {
	PathParams PostEmailBillingDocumentsfromBillRunPathParams
	Headers    PostEmailBillingDocumentsfromBillRunHeaders
	Request    shared.PostEmailBillingDocfromBillRunType `request:"mediaType=application/json"`
}

type PostEmailBillingDocumentsfromBillRunResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
