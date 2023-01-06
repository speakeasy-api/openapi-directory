package shared

type CustomObjectBulkJobRequestNamespaceEnum string

const (
	CustomObjectBulkJobRequestNamespaceEnumDefault  CustomObjectBulkJobRequestNamespaceEnum = "default"
	CustomObjectBulkJobRequestNamespaceEnumComZuora CustomObjectBulkJobRequestNamespaceEnum = "com_zuora"
)

type CustomObjectBulkJobRequestOperationEnum string

const (
	CustomObjectBulkJobRequestOperationEnumDelete CustomObjectBulkJobRequestOperationEnum = "delete"
	CustomObjectBulkJobRequestOperationEnumCreate CustomObjectBulkJobRequestOperationEnum = "create"
)

type CustomObjectBulkJobRequest struct {
	Filter    *CustomObjectBulkDeleteFilter           `json:"filter,omitempty"`
	Namespace CustomObjectBulkJobRequestNamespaceEnum `json:"namespace"`
	Object    string                                  `json:"object"`
	Operation CustomObjectBulkJobRequestOperationEnum `json:"operation"`
}
