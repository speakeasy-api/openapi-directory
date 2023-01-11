package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$expand")
    public String dollarExpand;
    public JobListQueryParams withDollarExpand(String dollarExpand) {
        this.dollarExpand = dollarExpand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$filter")
    public String dollarFilter;
    public JobListQueryParams withDollarFilter(String dollarFilter) {
        this.dollarFilter = dollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$select")
    public String dollarSelect;
    public JobListQueryParams withDollarSelect(String dollarSelect) {
        this.dollarSelect = dollarSelect;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public JobListQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxresults")
    public Integer maxresults;
    public JobListQueryParams withMaxresults(Integer maxresults) {
        this.maxresults = maxresults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public JobListQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}