package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public UsersUpdatePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=upnOrObjectId")
    public String upnOrObjectId;
    public UsersUpdatePathParams withUpnOrObjectId(String upnOrObjectId) {
        this.upnOrObjectId = upnOrObjectId;
        return this;
    }
}