package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAllinvestorAccounts200ApplicationJson
 * Array of investor accounts
**/
public class GetAllinvestorAccounts200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("investor_accounts")
    public Object[] investorAccounts;
    public GetAllinvestorAccounts200ApplicationJson withInvestorAccounts(Object[] investorAccounts) {
        this.investorAccounts = investorAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_available")
    public Boolean nextPageAvailable;
    public GetAllinvestorAccounts200ApplicationJson withNextPageAvailable(Boolean nextPageAvailable) {
        this.nextPageAvailable = nextPageAvailable;
        return this;
    }
}