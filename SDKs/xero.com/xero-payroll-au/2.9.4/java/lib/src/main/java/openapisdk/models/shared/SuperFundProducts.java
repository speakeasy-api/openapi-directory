package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuperFundProducts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperFundProducts")
    public SuperFundProduct[] superFundProducts;
    public SuperFundProducts withSuperFundProducts(SuperFundProduct[] superFundProducts) {
        this.superFundProducts = superFundProducts;
        return this;
    }
}