package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public ServicePrincipalsUpdateQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}