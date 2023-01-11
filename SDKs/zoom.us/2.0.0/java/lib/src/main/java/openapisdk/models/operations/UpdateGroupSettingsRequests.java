package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupSettingsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object oneOf;
    public UpdateGroupSettingsRequests withOneOf(Object oneOf) {
        this.oneOf = oneOf;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object oneOf1;
    public UpdateGroupSettingsRequests withOneOf1(Object oneOf1) {
        this.oneOf1 = oneOf1;
        return this;
    }
}