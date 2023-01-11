package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddRoleMembersRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddRoleMembersApplicationJson object;
    public AddRoleMembersRequests withObject(AddRoleMembersApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddRoleMembersMultipartFormData1 object1;
    public AddRoleMembersRequests withObject1(AddRoleMembersMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}