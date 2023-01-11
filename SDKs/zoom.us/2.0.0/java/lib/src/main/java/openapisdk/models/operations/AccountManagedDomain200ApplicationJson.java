package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountManagedDomain200ApplicationJson
 * List of managed domains.
**/
public class AccountManagedDomain200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public AccountManagedDomain200ApplicationJsonDomains[] domains;
    public AccountManagedDomain200ApplicationJson withDomains(AccountManagedDomain200ApplicationJsonDomains[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public AccountManagedDomain200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}