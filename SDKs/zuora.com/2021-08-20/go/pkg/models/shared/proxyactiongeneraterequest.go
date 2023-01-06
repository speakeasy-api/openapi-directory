package shared

type ProxyActiongenerateRequestTypeEnum string

const (
	ProxyActiongenerateRequestTypeEnumInvoice ProxyActiongenerateRequestTypeEnum = "Invoice"
)

type ProxyActiongenerateRequest struct {
	Objects []map[string]interface{}           `json:"objects"`
	Type    ProxyActiongenerateRequestTypeEnum `json:"type"`
}
