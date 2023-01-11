package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationsRemoveOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationObjectId")
    public String applicationObjectId;
    public ApplicationsRemoveOwnerPathParams withApplicationObjectId(String applicationObjectId) {
        this.applicationObjectId = applicationObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ownerObjectId")
    public String ownerObjectId;
    public ApplicationsRemoveOwnerPathParams withOwnerObjectId(String ownerObjectId) {
        this.ownerObjectId = ownerObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ApplicationsRemoveOwnerPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}