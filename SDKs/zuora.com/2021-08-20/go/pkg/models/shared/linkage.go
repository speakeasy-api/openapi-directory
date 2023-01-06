package shared

type LinkageLinkageTypeEnum string

const (
	LinkageLinkageTypeEnumStart   LinkageLinkageTypeEnum = "Start"
	LinkageLinkageTypeEnumSuccess LinkageLinkageTypeEnum = "Success"
	LinkageLinkageTypeEnumFailure LinkageLinkageTypeEnum = "Failure"
	LinkageLinkageTypeEnumIterate LinkageLinkageTypeEnum = "Iterate"
	LinkageLinkageTypeEnumTrue    LinkageLinkageTypeEnum = "true"
	LinkageLinkageTypeEnumFalse   LinkageLinkageTypeEnum = "false"
	LinkageLinkageTypeEnumApprove LinkageLinkageTypeEnum = "Approve"
	LinkageLinkageTypeEnumReject  LinkageLinkageTypeEnum = "Reject"
)

// Linkage
// Used to represent the relationship between workflow tasks
type Linkage struct {
	LinkageType      *LinkageLinkageTypeEnum `json:"linkage_type,omitempty"`
	SourceTaskID     *int64                  `json:"source_task_id,omitempty"`
	SourceWorkflowID *int64                  `json:"source_workflow_id,omitempty"`
	TargetTaskID     *int64                  `json:"target_task_id,omitempty"`
}
