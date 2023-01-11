package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoleRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRoleApplicationJson object;
    public CreateRoleRequests withObject(CreateRoleApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateRoleMultipartFormData object1;
    public CreateRoleRequests withObject1(CreateRoleMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}