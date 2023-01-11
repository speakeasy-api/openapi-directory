package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public DomainsGetPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public DomainsGetPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}