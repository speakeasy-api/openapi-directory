package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InviteChannelMembersRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InviteChannelMembersApplicationJson object;
    public InviteChannelMembersRequests withObject(InviteChannelMembersApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public InviteChannelMembersMultipartFormData1 object1;
    public InviteChannelMembersRequests withObject1(InviteChannelMembersMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}