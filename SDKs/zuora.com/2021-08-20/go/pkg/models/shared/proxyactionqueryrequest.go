package shared

type ProxyActionqueryRequestConf struct {
	BatchSize *int64 `json:"batchSize,omitempty"`
}

type ProxyActionqueryRequest struct {
	Conf        *ProxyActionqueryRequestConf `json:"conf,omitempty"`
	QueryString string                       `json:"queryString"`
}
