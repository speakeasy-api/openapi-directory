package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantStatusRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WebinarRegistrantStatusApplicationJson object;
    public WebinarRegistrantStatusRequests withObject(WebinarRegistrantStatusApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public WebinarRegistrantStatusMultipartFormData1 object1;
    public WebinarRegistrantStatusRequests withObject1(WebinarRegistrantStatusMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}