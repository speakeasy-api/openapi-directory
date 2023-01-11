package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobListPreparationAndReleaseTaskStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$filter")
    public String dollarFilter;
    public JobListPreparationAndReleaseTaskStatusQueryParams withDollarFilter(String dollarFilter) {
        this.dollarFilter = dollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$select")
    public String dollarSelect;
    public JobListPreparationAndReleaseTaskStatusQueryParams withDollarSelect(String dollarSelect) {
        this.dollarSelect = dollarSelect;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public JobListPreparationAndReleaseTaskStatusQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxresults")
    public Integer maxresults;
    public JobListPreparationAndReleaseTaskStatusQueryParams withMaxresults(Integer maxresults) {
        this.maxresults = maxresults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public JobListPreparationAndReleaseTaskStatusQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}