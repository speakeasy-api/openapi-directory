package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=xero-tenant-id")
    public String xeroTenantId;
    public UploadFileHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
}