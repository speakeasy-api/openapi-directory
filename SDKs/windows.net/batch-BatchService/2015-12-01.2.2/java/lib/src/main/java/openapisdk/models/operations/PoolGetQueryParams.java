package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$expand")
    public String dollarExpand;
    public PoolGetQueryParams withDollarExpand(String dollarExpand) {
        this.dollarExpand = dollarExpand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$select")
    public String dollarSelect;
    public PoolGetQueryParams withDollarSelect(String dollarSelect) {
        this.dollarSelect = dollarSelect;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public PoolGetQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public PoolGetQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}