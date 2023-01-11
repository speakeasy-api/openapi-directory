package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KeyCredentialsUpdateParameters
 * Request parameters for a KeyCredentials update operation
**/
public class KeyCredentialsUpdateParameters {
    @JsonProperty("value")
    public java.util.Map<String, java.util.Map<String, Object>>[] value;
    public KeyCredentialsUpdateParameters withValue(java.util.Map<String, java.util.Map<String, Object>>[] value) {
        this.value = value;
        return this;
    }
}