package operations

type AddSettingTemplateApplicationJSONTypeEnum string

const (
	AddSettingTemplateApplicationJSONTypeEnumUser             AddSettingTemplateApplicationJSONTypeEnum = "user"
	AddSettingTemplateApplicationJSONTypeEnumGroup            AddSettingTemplateApplicationJSONTypeEnum = "group"
	AddSettingTemplateApplicationJSONTypeEnumAutoReceptionist AddSettingTemplateApplicationJSONTypeEnum = "autoReceptionist"
	AddSettingTemplateApplicationJSONTypeEnumCommonarea       AddSettingTemplateApplicationJSONTypeEnum = "commonarea"
	AddSettingTemplateApplicationJSONTypeEnumInterop          AddSettingTemplateApplicationJSONTypeEnum = "interop"
)

type AddSettingTemplateApplicationJSON struct {
	Description *string                                   `json:"description,omitempty"`
	Name        string                                    `json:"name"`
	SiteID      *string                                   `json:"site_id,omitempty"`
	Type        AddSettingTemplateApplicationJSONTypeEnum `json:"type"`
}

type AddSettingTemplateMultipartFormDataTypeEnum string

const (
	AddSettingTemplateMultipartFormDataTypeEnumUser             AddSettingTemplateMultipartFormDataTypeEnum = "user"
	AddSettingTemplateMultipartFormDataTypeEnumGroup            AddSettingTemplateMultipartFormDataTypeEnum = "group"
	AddSettingTemplateMultipartFormDataTypeEnumAutoReceptionist AddSettingTemplateMultipartFormDataTypeEnum = "autoReceptionist"
	AddSettingTemplateMultipartFormDataTypeEnumCommonarea       AddSettingTemplateMultipartFormDataTypeEnum = "commonarea"
	AddSettingTemplateMultipartFormDataTypeEnumInterop          AddSettingTemplateMultipartFormDataTypeEnum = "interop"
)

type AddSettingTemplateMultipartFormData struct {
	Description *string                                     `multipartForm:"name=description"`
	Name        string                                      `multipartForm:"name=name"`
	SiteID      *string                                     `multipartForm:"name=site_id"`
	Type        AddSettingTemplateMultipartFormDataTypeEnum `multipartForm:"name=type"`
}

type AddSettingTemplateRequests struct {
	Object  *AddSettingTemplateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddSettingTemplateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddSettingTemplate201ApplicationJSON struct {
	Description *string `json:"description,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	Type        *string `json:"type,omitempty"`
}

type AddSettingTemplateRequest struct {
	Request *AddSettingTemplateRequests
}

type AddSettingTemplateResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	AddSettingTemplate201ApplicationJSONObject *AddSettingTemplate201ApplicationJSON
}
