package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAGroupMemberRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAGroupMemberApplicationJson object;
    public UpdateAGroupMemberRequests withObject(UpdateAGroupMemberApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateAGroupMemberMultipartFormData object1;
    public UpdateAGroupMemberRequests withObject1(UpdateAGroupMemberMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}