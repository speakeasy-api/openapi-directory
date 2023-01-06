package shared

type Application struct {
	CreateTime       *int64  `json:"create_time,omitempty"`
	CreatedBy        *string `json:"created_by,omitempty"`
	LastModifiedBy   *string `json:"last_modified_by,omitempty"`
	LastModifiedTime *int64  `json:"last_modified_time,omitempty"`
}
