package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolDisableAutoScaleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public PoolDisableAutoScaleQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public PoolDisableAutoScaleQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}