package shared

type SchemeOAuth struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	OAuth SchemeOAuth `security:"scheme,type=oauth2"`
}

type SchemeClientCredentials struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeBearer struct {
	APIKey string `security:"name=Authorization"`
}
