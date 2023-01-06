package operations

type UpdateASharedLineGroupPathParams struct {
	SharedLineGroupID string `pathParam:"style=simple,explode=false,name=sharedLineGroupId"`
}

// UpdateASharedLineGroupApplicationJSONPrimaryNumber
// If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
type UpdateASharedLineGroupApplicationJSONPrimaryNumber struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type UpdateASharedLineGroupApplicationJSONStatusEnum string

const (
	UpdateASharedLineGroupApplicationJSONStatusEnumActive   UpdateASharedLineGroupApplicationJSONStatusEnum = "active"
	UpdateASharedLineGroupApplicationJSONStatusEnumInactive UpdateASharedLineGroupApplicationJSONStatusEnum = "inactive"
)

type UpdateASharedLineGroupApplicationJSON struct {
	DisplayName     *string                                             `json:"display_name,omitempty"`
	ExtensionNumber *int64                                              `json:"extension_number,omitempty"`
	PrimaryNumber   *UpdateASharedLineGroupApplicationJSONPrimaryNumber `json:"primary_number,omitempty"`
	Status          *UpdateASharedLineGroupApplicationJSONStatusEnum    `json:"status,omitempty"`
	Timezone        *string                                             `json:"timezone,omitempty"`
}

// UpdateASharedLineGroupMultipartFormDataPrimaryNumber
// If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
type UpdateASharedLineGroupMultipartFormDataPrimaryNumber struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type UpdateASharedLineGroupMultipartFormDataStatusEnum string

const (
	UpdateASharedLineGroupMultipartFormDataStatusEnumActive   UpdateASharedLineGroupMultipartFormDataStatusEnum = "active"
	UpdateASharedLineGroupMultipartFormDataStatusEnumInactive UpdateASharedLineGroupMultipartFormDataStatusEnum = "inactive"
)

type UpdateASharedLineGroupMultipartFormData struct {
	DisplayName     *string                                               `multipartForm:"name=display_name"`
	ExtensionNumber *int64                                                `multipartForm:"name=extension_number"`
	PrimaryNumber   *UpdateASharedLineGroupMultipartFormDataPrimaryNumber `multipartForm:"name=primary_number,json"`
	Status          *UpdateASharedLineGroupMultipartFormDataStatusEnum    `multipartForm:"name=status"`
	Timezone        *string                                               `multipartForm:"name=timezone"`
}

type UpdateASharedLineGroupRequests struct {
	Object  *UpdateASharedLineGroupApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateASharedLineGroupMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateASharedLineGroupRequest struct {
	PathParams UpdateASharedLineGroupPathParams
	Request    *UpdateASharedLineGroupRequests
}

type UpdateASharedLineGroupResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	UpdateASharedLineGroup204ApplicationJSONAny *interface{}
}
