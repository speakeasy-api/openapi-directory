package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolExistsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$select")
    public String dollarSelect;
    public PoolExistsQueryParams withDollarSelect(String dollarSelect) {
        this.dollarSelect = dollarSelect;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public PoolExistsQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public PoolExistsQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}