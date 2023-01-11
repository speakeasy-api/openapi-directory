package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAllInvestors200ApplicationJson
 * Array of investors
**/
public class GetAllInvestors200ApplicationJson {
    @JsonProperty("investors")
    public Object[] investors;
    public GetAllInvestors200ApplicationJson withInvestors(Object[] investors) {
        this.investors = investors;
        return this;
    }
    @JsonProperty("next_page_available")
    public Boolean nextPageAvailable;
    public GetAllInvestors200ApplicationJson withNextPageAvailable(Boolean nextPageAvailable) {
        this.nextPageAvailable = nextPageAvailable;
        return this;
    }
}