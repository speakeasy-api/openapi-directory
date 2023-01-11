package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerificationAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public VerificationAccount withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonProperty("accountNumber")
    public String accountNumber;
    public VerificationAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("accountType")
    public VerificationAccountAccountTypeEnum accountType;
    public VerificationAccount withAccountType(VerificationAccountAccountTypeEnum accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonProperty("bankTransferCode")
    public VerificationBankTransferCode bankTransferCode;
    public VerificationAccount withBankTransferCode(VerificationBankTransferCode bankTransferCode) {
        this.bankTransferCode = bankTransferCode;
        return this;
    }
}