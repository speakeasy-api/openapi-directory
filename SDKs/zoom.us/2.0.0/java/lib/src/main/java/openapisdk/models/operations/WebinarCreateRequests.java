package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WebinarCreateApplicationJson object;
    public WebinarCreateRequests withObject(WebinarCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public WebinarCreateMultipartFormData1 object1;
    public WebinarCreateRequests withObject1(WebinarCreateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}