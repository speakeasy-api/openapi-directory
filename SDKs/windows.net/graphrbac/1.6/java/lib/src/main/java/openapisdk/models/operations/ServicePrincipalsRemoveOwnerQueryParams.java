package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsRemoveOwnerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public ServicePrincipalsRemoveOwnerQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
}