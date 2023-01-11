package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupLockedSettingsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object oneOf;
    public GroupLockedSettingsRequests withOneOf(Object oneOf) {
        this.oneOf = oneOf;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object oneOf1;
    public GroupLockedSettingsRequests withOneOf1(Object oneOf1) {
        this.oneOf1 = oneOf1;
        return this;
    }
}