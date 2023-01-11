package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WebinarRegistrantCreateApplicationJson object;
    public WebinarRegistrantCreateRequests withObject(WebinarRegistrantCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public WebinarRegistrantCreateMultipartFormData1 object1;
    public WebinarRegistrantCreateRequests withObject1(WebinarRegistrantCreateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}