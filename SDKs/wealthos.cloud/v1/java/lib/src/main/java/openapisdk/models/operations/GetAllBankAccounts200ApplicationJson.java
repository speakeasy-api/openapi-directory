package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAllBankAccounts200ApplicationJson
 * Array of bank accounts
**/
public class GetAllBankAccounts200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankAccounts")
    public Object[] bankAccounts;
    public GetAllBankAccounts200ApplicationJson withBankAccounts(Object[] bankAccounts) {
        this.bankAccounts = bankAccounts;
        return this;
    }
}