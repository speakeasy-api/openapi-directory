package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPanelistCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WebinarPanelistCreateApplicationJson object;
    public WebinarPanelistCreateRequests withObject(WebinarPanelistCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public WebinarPanelistCreateMultipartFormData1 object1;
    public WebinarPanelistCreateRequests withObject1(WebinarPanelistCreateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}