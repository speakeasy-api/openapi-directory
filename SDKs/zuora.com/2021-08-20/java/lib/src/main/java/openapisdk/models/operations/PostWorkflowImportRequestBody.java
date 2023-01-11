package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostWorkflowImportRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkages")
    public openapisdk.models.shared.Linkage[] linkages;
    public PostWorkflowImportRequestBody withLinkages(openapisdk.models.shared.Linkage[] linkages) {
        this.linkages = linkages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public openapisdk.models.shared.Task[] tasks;
    public PostWorkflowImportRequestBody withTasks(openapisdk.models.shared.Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow")
    public openapisdk.models.shared.Workflow workflow;
    public PostWorkflowImportRequestBody withWorkflow(openapisdk.models.shared.Workflow workflow) {
        this.workflow = workflow;
        return this;
    }
}