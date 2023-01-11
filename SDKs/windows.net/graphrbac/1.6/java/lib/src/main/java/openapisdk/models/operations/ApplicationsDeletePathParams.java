package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationObjectId")
    public String applicationObjectId;
    public ApplicationsDeletePathParams withApplicationObjectId(String applicationObjectId) {
        this.applicationObjectId = applicationObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ApplicationsDeletePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}