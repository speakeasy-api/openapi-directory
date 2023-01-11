package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadVideoAlt1Request {
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.video+json")
    public UploadVideoAlt1RequestBody request;
    public UploadVideoAlt1Request withRequest(UploadVideoAlt1RequestBody request) {
        this.request = request;
        return this;
    }
}