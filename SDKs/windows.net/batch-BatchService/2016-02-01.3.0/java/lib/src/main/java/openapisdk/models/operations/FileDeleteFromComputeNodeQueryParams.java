package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileDeleteFromComputeNodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public FileDeleteFromComputeNodeQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recursive")
    public Boolean recursive;
    public FileDeleteFromComputeNodeQueryParams withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public FileDeleteFromComputeNodeQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}