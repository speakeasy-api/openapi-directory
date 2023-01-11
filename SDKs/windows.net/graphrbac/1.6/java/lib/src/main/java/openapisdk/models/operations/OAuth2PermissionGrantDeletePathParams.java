package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OAuth2PermissionGrantDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectId")
    public String objectId;
    public OAuth2PermissionGrantDeletePathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public OAuth2PermissionGrantDeletePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}