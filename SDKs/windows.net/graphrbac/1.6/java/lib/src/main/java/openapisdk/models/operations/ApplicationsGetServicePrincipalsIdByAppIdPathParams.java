package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationsGetServicePrincipalsIdByAppIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationID")
    public String applicationID;
    public ApplicationsGetServicePrincipalsIdByAppIdPathParams withApplicationId(String applicationID) {
        this.applicationID = applicationID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenantID")
    public String tenantID;
    public ApplicationsGetServicePrincipalsIdByAppIdPathParams withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}