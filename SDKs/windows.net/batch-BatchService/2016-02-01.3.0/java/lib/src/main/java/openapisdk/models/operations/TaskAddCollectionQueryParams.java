package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskAddCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public TaskAddCollectionQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public TaskAddCollectionQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}