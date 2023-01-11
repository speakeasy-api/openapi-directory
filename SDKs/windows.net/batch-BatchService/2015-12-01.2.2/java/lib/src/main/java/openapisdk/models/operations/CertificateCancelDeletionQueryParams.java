package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateCancelDeletionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public CertificateCancelDeletionQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public CertificateCancelDeletionQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}