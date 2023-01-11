package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskListSubtasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$select")
    public String dollarSelect;
    public TaskListSubtasksQueryParams withDollarSelect(String dollarSelect) {
        this.dollarSelect = dollarSelect;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public TaskListSubtasksQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public TaskListSubtasksQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}