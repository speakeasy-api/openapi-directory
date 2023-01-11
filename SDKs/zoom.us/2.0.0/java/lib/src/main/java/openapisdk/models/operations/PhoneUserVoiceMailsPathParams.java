package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneUserVoiceMailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PhoneUserVoiceMailsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}