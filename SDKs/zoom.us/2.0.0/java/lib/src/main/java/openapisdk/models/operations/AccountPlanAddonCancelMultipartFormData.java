package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * AccountPlanAddonCancelMultipartFormData
 * Account plan object
**/
public class AccountPlanAddonCancelMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=action")
    public AccountPlanAddonCancelMultipartFormDataActionEnum action;
    public AccountPlanAddonCancelMultipartFormData withAction(AccountPlanAddonCancelMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=comment")
    public String comment;
    public AccountPlanAddonCancelMultipartFormData withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=reason")
    public Long reason;
    public AccountPlanAddonCancelMultipartFormData withReason(Long reason) {
        this.reason = reason;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public String type;
    public AccountPlanAddonCancelMultipartFormData withType(String type) {
        this.type = type;
        return this;
    }
}