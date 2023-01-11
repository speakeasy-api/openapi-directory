package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileDeleteFromTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public FileDeleteFromTaskQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recursive")
    public Boolean recursive;
    public FileDeleteFromTaskQueryParams withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public FileDeleteFromTaskQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}