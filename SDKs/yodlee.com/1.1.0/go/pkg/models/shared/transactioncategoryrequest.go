package shared

type TransactionCategoryRequestInput struct {
	CategoryName     *string `json:"categoryName,omitempty"`
	ParentCategoryID int32   `json:"parentCategoryId"`
}
