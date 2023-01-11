package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OAuth2PermissionGrantCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public OAuth2PermissionGrantCreatePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}