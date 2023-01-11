package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectsGetObjectsByObjectIdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ObjectsGetObjectsByObjectIdsPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}