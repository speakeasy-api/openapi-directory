package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WebinarUpdateApplicationJson object;
    public WebinarUpdateRequests withObject(WebinarUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public WebinarUpdateMultipartFormData1 object1;
    public WebinarUpdateRequests withObject1(WebinarUpdateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}