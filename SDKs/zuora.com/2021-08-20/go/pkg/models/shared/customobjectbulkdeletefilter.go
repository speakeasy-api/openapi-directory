package shared

// CustomObjectBulkDeleteFilter
// Filters to determine which records to be deleted in the bulk delete operation.
type CustomObjectBulkDeleteFilter struct {
	Conditions []CustomObjectBulkDeleteFilterCondition `json:"conditions"`
}
