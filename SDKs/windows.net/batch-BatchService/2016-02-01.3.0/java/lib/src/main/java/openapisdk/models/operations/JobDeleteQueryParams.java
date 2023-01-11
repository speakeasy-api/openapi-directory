package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public JobDeleteQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public JobDeleteQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}