package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsUpdatePasswordCredentialsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectId")
    public String objectId;
    public ServicePrincipalsUpdatePasswordCredentialsPathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ServicePrincipalsUpdatePasswordCredentialsPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}