package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Merchant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress address;
    public Merchant withAddress(AccountAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryLabel")
    public String[] categoryLabel;
    public Merchant withCategoryLabel(String[] categoryLabel) {
        this.categoryLabel = categoryLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public Contact contact;
    public Merchant withContact(Contact contact) {
        this.contact = contact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinates")
    public Coordinates coordinates;
    public Merchant withCoordinates(Coordinates coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Merchant withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Merchant withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public MerchantSourceEnum source;
    public Merchant withSource(MerchantSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public Merchant withWebsite(String website) {
        this.website = website;
        return this;
    }
}