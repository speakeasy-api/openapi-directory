package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolRemoveNodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public PoolRemoveNodesQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public PoolRemoveNodesQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}