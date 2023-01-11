package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileListFromTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$filter")
    public String dollarFilter;
    public FileListFromTaskQueryParams withDollarFilter(String dollarFilter) {
        this.dollarFilter = dollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public FileListFromTaskQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxresults")
    public Integer maxresults;
    public FileListFromTaskQueryParams withMaxresults(Integer maxresults) {
        this.maxresults = maxresults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recursive")
    public Boolean recursive;
    public FileListFromTaskQueryParams withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public FileListFromTaskQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}