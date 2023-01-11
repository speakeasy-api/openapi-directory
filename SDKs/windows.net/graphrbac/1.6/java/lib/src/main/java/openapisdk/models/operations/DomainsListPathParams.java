package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public DomainsListPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}