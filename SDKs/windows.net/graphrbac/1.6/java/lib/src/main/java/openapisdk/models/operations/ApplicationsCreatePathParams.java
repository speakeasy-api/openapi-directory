package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ApplicationsCreatePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}