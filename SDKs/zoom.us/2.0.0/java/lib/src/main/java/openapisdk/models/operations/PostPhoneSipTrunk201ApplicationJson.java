package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPhoneSipTrunk201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_trunks")
    public PostPhoneSipTrunk201ApplicationJsonSipTrunks[] sipTrunks;
    public PostPhoneSipTrunk201ApplicationJson withSipTrunks(PostPhoneSipTrunk201ApplicationJsonSipTrunks[] sipTrunks) {
        this.sipTrunks = sipTrunks;
        return this;
    }
}