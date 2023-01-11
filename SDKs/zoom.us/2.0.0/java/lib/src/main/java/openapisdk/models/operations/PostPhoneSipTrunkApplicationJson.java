package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPhoneSipTrunkApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_trunks")
    public PostPhoneSipTrunkApplicationJsonSipTrunks[] sipTrunks;
    public PostPhoneSipTrunkApplicationJson withSipTrunks(PostPhoneSipTrunkApplicationJsonSipTrunks[] sipTrunks) {
        this.sipTrunks = sipTrunks;
        return this;
    }
}