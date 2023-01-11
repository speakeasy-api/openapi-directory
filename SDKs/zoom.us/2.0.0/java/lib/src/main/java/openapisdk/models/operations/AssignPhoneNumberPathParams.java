package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public AssignPhoneNumberPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}