package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EvaluateAddressResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress[] address;
    public EvaluateAddressResponse withAddress(AccountAddress[] address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isValidAddress")
    public Boolean isValidAddress;
    public EvaluateAddressResponse withIsValidAddress(Boolean isValidAddress) {
        this.isValidAddress = isValidAddress;
        return this;
    }
}