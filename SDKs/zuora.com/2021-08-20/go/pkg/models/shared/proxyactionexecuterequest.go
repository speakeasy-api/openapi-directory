package shared

type ProxyActionexecuteRequestTypeEnum string

const (
	ProxyActionexecuteRequestTypeEnumInvoiceSplit ProxyActionexecuteRequestTypeEnum = "InvoiceSplit"
)

type ProxyActionexecuteRequest struct {
	Ids         []string                          `json:"ids"`
	Synchronous bool                              `json:"synchronous"`
	Type        ProxyActionexecuteRequestTypeEnum `json:"type"`
}
