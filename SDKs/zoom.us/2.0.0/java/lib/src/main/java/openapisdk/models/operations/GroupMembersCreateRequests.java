package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupMembersCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GroupMembersCreateApplicationJson object;
    public GroupMembersCreateRequests withObject(GroupMembersCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public GroupMembersCreateMultipartFormData1 object1;
    public GroupMembersCreateRequests withObject1(GroupMembersCreateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}