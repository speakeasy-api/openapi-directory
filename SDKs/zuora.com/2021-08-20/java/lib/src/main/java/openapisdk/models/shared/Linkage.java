package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Linkage
 * Used to represent the relationship between workflow tasks
**/
public class Linkage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkage_type")
    public LinkageLinkageTypeEnum linkageType;
    public Linkage withLinkageType(LinkageLinkageTypeEnum linkageType) {
        this.linkageType = linkageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_task_id")
    public Long sourceTaskId;
    public Linkage withSourceTaskId(Long sourceTaskId) {
        this.sourceTaskId = sourceTaskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_workflow_id")
    public Long sourceWorkflowId;
    public Linkage withSourceWorkflowId(Long sourceWorkflowId) {
        this.sourceWorkflowId = sourceWorkflowId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_task_id")
    public Long targetTaskId;
    public Linkage withTargetTaskId(Long targetTaskId) {
        this.targetTaskId = targetTaskId;
        return this;
    }
}