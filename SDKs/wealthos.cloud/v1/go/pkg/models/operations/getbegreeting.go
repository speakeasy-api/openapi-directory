package operations

import (
	"openapi/pkg/models/shared"
)

type GetBeGreetingSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetBeGreetingRequest struct {
	Security GetBeGreetingSecurity
}

type GetBeGreetingResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetBEGreeting200ApplicationJSONAny *interface{}
	GetBEGreeting403ApplicationJSONAny *interface{}
	GetBEGreeting429ApplicationJSONAny *interface{}
	GetBEGreeting500ApplicationJSONAny *interface{}
}
