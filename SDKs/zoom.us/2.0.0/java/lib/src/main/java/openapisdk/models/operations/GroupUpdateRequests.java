package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GroupUpdateApplicationJson object;
    public GroupUpdateRequests withObject(GroupUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public GroupUpdateMultipartFormData object1;
    public GroupUpdateRequests withObject1(GroupUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}