package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingStatusUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object any;
    public RecordingStatusUpdateRequests withAny(Object any) {
        this.any = any;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object any1;
    public RecordingStatusUpdateRequests withAny1(Object any1) {
        this.any1 = any1;
        return this;
    }
}