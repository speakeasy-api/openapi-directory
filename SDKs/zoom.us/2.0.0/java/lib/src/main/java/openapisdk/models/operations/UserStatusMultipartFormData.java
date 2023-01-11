package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * UserStatusMultipartFormData
 * The action.
**/
public class UserStatusMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=action")
    public UserStatusMultipartFormDataActionEnum action;
    public UserStatusMultipartFormData withAction(UserStatusMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
}