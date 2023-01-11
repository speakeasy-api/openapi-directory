package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ServicePrincipalsListPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}