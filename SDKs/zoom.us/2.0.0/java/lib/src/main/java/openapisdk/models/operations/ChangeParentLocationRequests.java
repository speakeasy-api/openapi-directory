package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeParentLocationRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChangeParentLocationApplicationJson object;
    public ChangeParentLocationRequests withObject(ChangeParentLocationApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ChangeParentLocationMultipartFormData object1;
    public ChangeParentLocationRequests withObject1(ChangeParentLocationMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}