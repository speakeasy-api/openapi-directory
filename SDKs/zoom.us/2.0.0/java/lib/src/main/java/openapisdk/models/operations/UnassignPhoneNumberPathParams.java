package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignPhoneNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneNumberId")
    public String phoneNumberId;
    public UnassignPhoneNumberPathParams withPhoneNumberId(String phoneNumberId) {
        this.phoneNumberId = phoneNumberId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public UnassignPhoneNumberPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}