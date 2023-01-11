package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public ApplicationGetQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public ApplicationGetQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}