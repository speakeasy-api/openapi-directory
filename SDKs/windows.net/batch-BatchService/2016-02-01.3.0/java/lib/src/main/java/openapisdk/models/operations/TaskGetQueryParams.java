package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$expand")
    public String dollarExpand;
    public TaskGetQueryParams withDollarExpand(String dollarExpand) {
        this.dollarExpand = dollarExpand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$select")
    public String dollarSelect;
    public TaskGetQueryParams withDollarSelect(String dollarSelect) {
        this.dollarSelect = dollarSelect;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public TaskGetQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public TaskGetQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}