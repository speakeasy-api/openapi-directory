package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePresenceStatusMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=duration")
    public Long duration;
    public UpdatePresenceStatusMultipartFormData withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=status")
    public UpdatePresenceStatusMultipartFormDataStatusEnum status;
    public UpdatePresenceStatusMultipartFormData withStatus(UpdatePresenceStatusMultipartFormDataStatusEnum status) {
        this.status = status;
        return this;
    }
}