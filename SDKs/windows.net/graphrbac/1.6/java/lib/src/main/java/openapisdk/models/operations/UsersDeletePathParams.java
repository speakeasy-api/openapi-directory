package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public UsersDeletePathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=upnOrObjectId")
    public String upnOrObjectId;
    public UsersDeletePathParams withUpnOrObjectId(String upnOrObjectId) {
        this.upnOrObjectId = upnOrObjectId;
        return this;
    }
}