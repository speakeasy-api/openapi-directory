package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationsListKeyCredentialsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationObjectId")
    public String applicationObjectId;
    public ApplicationsListKeyCredentialsPathParams withApplicationObjectId(String applicationObjectId) {
        this.applicationObjectId = applicationObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ApplicationsListKeyCredentialsPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}