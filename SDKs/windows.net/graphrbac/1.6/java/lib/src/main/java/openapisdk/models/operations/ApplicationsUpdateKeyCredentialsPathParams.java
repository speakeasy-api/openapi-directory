package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationsUpdateKeyCredentialsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationObjectId")
    public String applicationObjectId;
    public ApplicationsUpdateKeyCredentialsPathParams withApplicationObjectId(String applicationObjectId) {
        this.applicationObjectId = applicationObjectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ApplicationsUpdateKeyCredentialsPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}