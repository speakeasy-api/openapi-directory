package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * AccountPlanAddonCreateMultipartFormData2
 * Zoom Phone Plan Object
**/
public class AccountPlanAddonCreateMultipartFormData2 {
    @SpeakeasyMetadata("multipartForm:name=plan_details,json")
    public AccountPlanAddonCreateMultipartFormData2PhonePlan planDetails;
    public AccountPlanAddonCreateMultipartFormData2 withPlanDetails(AccountPlanAddonCreateMultipartFormData2PhonePlan planDetails) {
        this.planDetails = planDetails;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public String type;
    public AccountPlanAddonCreateMultipartFormData2 withType(String type) {
        this.type = type;
        return this;
    }
}