package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletedApplicationsHardDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationObjectId")
    public String applicationObjectId;
    public DeletedApplicationsHardDeletePathParams withApplicationObjectId(String applicationObjectId) {
        this.applicationObjectId = applicationObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public DeletedApplicationsHardDeletePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}