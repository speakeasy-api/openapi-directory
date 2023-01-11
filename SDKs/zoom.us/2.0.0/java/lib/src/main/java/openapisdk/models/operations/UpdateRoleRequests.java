package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoleRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRoleApplicationJson object;
    public UpdateRoleRequests withObject(UpdateRoleApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateRoleMultipartFormData object1;
    public UpdateRoleRequests withObject1(UpdateRoleMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}