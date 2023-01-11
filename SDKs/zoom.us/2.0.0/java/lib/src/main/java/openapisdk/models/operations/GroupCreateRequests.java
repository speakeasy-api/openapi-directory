package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GroupCreateApplicationJson object;
    public GroupCreateRequests withObject(GroupCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public GroupCreateMultipartFormData object1;
    public GroupCreateRequests withObject1(GroupCreateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}