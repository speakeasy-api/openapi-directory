package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarStatusRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object any;
    public WebinarStatusRequests withAny(Object any) {
        this.any = any;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object any1;
    public WebinarStatusRequests withAny1(Object any1) {
        this.any1 = any1;
        return this;
    }
}