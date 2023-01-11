package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public UsersGetPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=upnOrObjectId")
    public String upnOrObjectId;
    public UsersGetPathParams withUpnOrObjectId(String upnOrObjectId) {
        this.upnOrObjectId = upnOrObjectId;
        return this;
    }
}