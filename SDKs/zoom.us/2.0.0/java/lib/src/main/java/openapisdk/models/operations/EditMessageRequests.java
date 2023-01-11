package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditMessageRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EditMessageApplicationJson object;
    public EditMessageRequests withObject(EditMessageApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public EditMessageMultipartFormData object1;
    public EditMessageRequests withObject1(EditMessageMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}