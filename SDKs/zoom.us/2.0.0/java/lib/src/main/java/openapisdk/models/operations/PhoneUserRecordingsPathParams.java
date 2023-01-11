package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneUserRecordingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PhoneUserRecordingsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}