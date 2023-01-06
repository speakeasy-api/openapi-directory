package shared

type UpdateCategoryRequestSourceEnum string

const (
	UpdateCategoryRequestSourceEnumSystem UpdateCategoryRequestSourceEnum = "SYSTEM"
	UpdateCategoryRequestSourceEnumUser   UpdateCategoryRequestSourceEnum = "USER"
)

type UpdateCategoryRequest struct {
	CategoryName          *string                         `json:"categoryName,omitempty"`
	HighLevelCategoryName *string                         `json:"highLevelCategoryName,omitempty"`
	ID                    int64                           `json:"id"`
	Source                UpdateCategoryRequestSourceEnum `json:"source"`
}
