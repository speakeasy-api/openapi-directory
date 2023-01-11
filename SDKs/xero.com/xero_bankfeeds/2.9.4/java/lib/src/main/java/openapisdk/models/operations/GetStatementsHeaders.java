package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatementsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Application-Id")
    public String xeroApplicationId;
    public GetStatementsHeaders withXeroApplicationId(String xeroApplicationId) {
        this.xeroApplicationId = xeroApplicationId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-Tenant-Id")
    public String xeroTenantId;
    public GetStatementsHeaders withXeroTenantId(String xeroTenantId) {
        this.xeroTenantId = xeroTenantId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Xero-User-Id")
    public String xeroUserId;
    public GetStatementsHeaders withXeroUserId(String xeroUserId) {
        this.xeroUserId = xeroUserId;
        return this;
    }
}