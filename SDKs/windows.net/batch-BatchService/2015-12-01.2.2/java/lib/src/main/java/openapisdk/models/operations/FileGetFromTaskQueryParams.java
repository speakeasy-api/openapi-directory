package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileGetFromTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public FileGetFromTaskQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public FileGetFromTaskQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}