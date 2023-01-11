package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$expand")
    public String dollarExpand;
    public TaskListQueryParams withDollarExpand(String dollarExpand) {
        this.dollarExpand = dollarExpand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$filter")
    public String dollarFilter;
    public TaskListQueryParams withDollarFilter(String dollarFilter) {
        this.dollarFilter = dollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$select")
    public String dollarSelect;
    public TaskListQueryParams withDollarSelect(String dollarSelect) {
        this.dollarSelect = dollarSelect;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public TaskListQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxresults")
    public Integer maxresults;
    public TaskListQueryParams withMaxresults(Integer maxresults) {
        this.maxresults = maxresults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public TaskListQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}