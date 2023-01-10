package shared

type SchemeWsSecretKey struct {
	APIKey string `security:"name=x-token"`
}

type SchemeAPIPubKey struct {
	APIKey string `security:"name=Authorization"`
}

type SchemeAPISecretKey struct {
	APIKey string `security:"name=x-api-key"`
}
