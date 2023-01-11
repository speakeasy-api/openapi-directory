package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuperFundProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ABN")
    public String abn;
    public SuperFundProduct withAbn(String abn) {
        this.abn = abn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductName")
    public String productName;
    public SuperFundProduct withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SPIN")
    public String spin;
    public SuperFundProduct withSpin(String spin) {
        this.spin = spin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("USI")
    public String usi;
    public SuperFundProduct withUsi(String usi) {
        this.usi = usi;
        return this;
    }
}