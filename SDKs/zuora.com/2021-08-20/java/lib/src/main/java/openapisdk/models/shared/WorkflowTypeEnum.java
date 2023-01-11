package openapisdk.models.shared;


public enum WorkflowTypeEnum {
    WORKFLOW_SETUP("Workflow::Setup"),
    WORKFLOW_INSTANCE("Workflow::Instance");

    public final String value;

    private WorkflowTypeEnum(String value) {
        this.value = value;
    }
}
