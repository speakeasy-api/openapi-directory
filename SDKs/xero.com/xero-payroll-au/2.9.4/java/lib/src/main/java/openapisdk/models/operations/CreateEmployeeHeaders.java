package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEmployeeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public CreateEmployeeHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}