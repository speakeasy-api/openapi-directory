package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupMembersCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ImGroupMembersCreateApplicationJson object;
    public ImGroupMembersCreateRequests withObject(ImGroupMembersCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ImGroupMembersCreateMultipartFormData1 object1;
    public ImGroupMembersCreateRequests withObject1(ImGroupMembersCreateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}