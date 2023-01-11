package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobSchedulePatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public JobSchedulePatchQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public JobSchedulePatchQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}