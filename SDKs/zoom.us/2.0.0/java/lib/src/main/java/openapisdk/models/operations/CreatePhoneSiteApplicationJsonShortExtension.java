package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePhoneSiteApplicationJsonShortExtension
 * Short extension of the phone site.
**/
public class CreatePhoneSiteApplicationJsonShortExtension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public CreatePhoneSiteApplicationJsonShortExtension withLength(Long length) {
        this.length = length;
        return this;
    }
}