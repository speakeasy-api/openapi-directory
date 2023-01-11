package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersToSharedLineGroupRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddMembersToSharedLineGroupApplicationJson object;
    public AddMembersToSharedLineGroupRequests withObject(AddMembersToSharedLineGroupApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddMembersToSharedLineGroupMultipartFormData object1;
    public AddMembersToSharedLineGroupRequests withObject1(AddMembersToSharedLineGroupMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}