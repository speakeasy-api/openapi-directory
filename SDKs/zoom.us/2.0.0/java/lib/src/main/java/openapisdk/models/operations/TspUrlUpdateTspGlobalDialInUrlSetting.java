package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class TspUrlUpdateTspGlobalDialInUrlSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_url")
@SpeakeasyMetadata("multipartForm:name=audio_url")
    public String audioUrl;
    public TspUrlUpdateTspGlobalDialInUrlSetting withAudioUrl(String audioUrl) {
        this.audioUrl = audioUrl;
        return this;
    }
}