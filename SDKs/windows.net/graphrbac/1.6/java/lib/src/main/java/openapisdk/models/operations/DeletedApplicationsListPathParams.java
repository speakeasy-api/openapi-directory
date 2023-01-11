package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletedApplicationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public DeletedApplicationsListPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}