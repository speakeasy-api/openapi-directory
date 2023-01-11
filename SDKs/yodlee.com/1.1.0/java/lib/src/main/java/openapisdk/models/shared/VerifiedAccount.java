package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifiedAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public VerifiedAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public VerifiedAccount withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankTransferCode")
    public BankTransferCode[] bankTransferCode;
    public VerifiedAccount withBankTransferCode(BankTransferCode[] bankTransferCode) {
        this.bankTransferCode = bankTransferCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullAccountNumber")
    public String fullAccountNumber;
    public VerifiedAccount withFullAccountNumber(String fullAccountNumber) {
        this.fullAccountNumber = fullAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holder")
    public AccountHolder[] holder;
    public VerifiedAccount withHolder(AccountHolder[] holder) {
        this.holder = holder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public VerifiedAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public VerifiedAccount withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerName")
    public String providerName;
    public VerifiedAccount withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
}