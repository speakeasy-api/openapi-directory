package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyCredentialListResult
 * KeyCredential list operation result.
**/
public class KeyCredentialListResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, java.util.Map<String, Object>>[] value;
    public KeyCredentialListResult withValue(java.util.Map<String, java.util.Map<String, Object>>[] value) {
        this.value = value;
        return this;
    }
}