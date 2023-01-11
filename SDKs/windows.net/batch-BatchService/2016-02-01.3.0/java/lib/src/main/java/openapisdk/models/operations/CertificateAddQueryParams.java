package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public CertificateAddQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public CertificateAddQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}