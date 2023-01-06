package shared

type CustomObjectRecordBatchActionTypeEnum string

const (
	CustomObjectRecordBatchActionTypeEnumDelete CustomObjectRecordBatchActionTypeEnum = "delete"
	CustomObjectRecordBatchActionTypeEnumUpdate CustomObjectRecordBatchActionTypeEnum = "update"
)

// CustomObjectRecordBatchAction
// The batch action on custom object records
type CustomObjectRecordBatchAction struct {
	AllowPartialSuccess *bool                                 `json:"allowPartialSuccess,omitempty"`
	Ids                 []string                              `json:"ids,omitempty"`
	Records             map[string]map[string]interface{}     `json:"records,omitempty"`
	Type                CustomObjectRecordBatchActionTypeEnum `json:"type"`
}
