package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsRemoveOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectId")
    public String objectId;
    public ServicePrincipalsRemoveOwnerPathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownerObjectId")
    public String ownerObjectId;
    public ServicePrincipalsRemoveOwnerPathParams withOwnerObjectId(String ownerObjectId) {
        this.ownerObjectId = ownerObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ServicePrincipalsRemoveOwnerPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}