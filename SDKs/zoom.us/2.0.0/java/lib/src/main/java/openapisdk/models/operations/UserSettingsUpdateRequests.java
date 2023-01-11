package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserSettingsUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object oneOf;
    public UserSettingsUpdateRequests withOneOf(Object oneOf) {
        this.oneOf = oneOf;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object oneOf1;
    public UserSettingsUpdateRequests withOneOf1(Object oneOf1) {
        this.oneOf1 = oneOf1;
        return this;
    }
}