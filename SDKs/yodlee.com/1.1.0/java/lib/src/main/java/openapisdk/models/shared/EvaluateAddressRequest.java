package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EvaluateAddressRequest {
    @JsonProperty("address")
    public EvaluateAccountAddress address;
    public EvaluateAddressRequest withAddress(EvaluateAccountAddress address) {
        this.address = address;
        return this;
    }
}