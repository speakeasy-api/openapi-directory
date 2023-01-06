package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCallQueuePathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
}

type UpdateCallQueueApplicationJSONStatusEnum string

const (
	UpdateCallQueueApplicationJSONStatusEnumActive   UpdateCallQueueApplicationJSONStatusEnum = "active"
	UpdateCallQueueApplicationJSONStatusEnumInactive UpdateCallQueueApplicationJSONStatusEnum = "inactive"
)

type UpdateCallQueueApplicationJSON struct {
	Description     *string                                   `json:"description,omitempty"`
	ExtensionNumber *int64                                    `json:"extension_number,omitempty"`
	Name            *string                                   `json:"name,omitempty"`
	SiteID          *string                                   `json:"site_id,omitempty"`
	Status          *UpdateCallQueueApplicationJSONStatusEnum `json:"status,omitempty"`
	Timezone        *string                                   `json:"timezone,omitempty"`
}

type UpdateCallQueueMultipartFormDataStatusEnum string

const (
	UpdateCallQueueMultipartFormDataStatusEnumActive   UpdateCallQueueMultipartFormDataStatusEnum = "active"
	UpdateCallQueueMultipartFormDataStatusEnumInactive UpdateCallQueueMultipartFormDataStatusEnum = "inactive"
)

type UpdateCallQueueMultipartFormData struct {
	Description     *string                                     `multipartForm:"name=description"`
	ExtensionNumber *int64                                      `multipartForm:"name=extension_number"`
	Name            *string                                     `multipartForm:"name=name"`
	SiteID          *string                                     `multipartForm:"name=site_id"`
	Status          *UpdateCallQueueMultipartFormDataStatusEnum `multipartForm:"name=status"`
	Timezone        *string                                     `multipartForm:"name=timezone"`
}

type UpdateCallQueueRequests struct {
	Object  *UpdateCallQueueApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateCallQueueMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateCallQueueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateCallQueueRequest struct {
	PathParams UpdateCallQueuePathParams
	Request    *UpdateCallQueueRequests
	Security   UpdateCallQueueSecurity
}

type UpdateCallQueueResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	UpdateCallQueue204ApplicationJSONAny *interface{}
}
