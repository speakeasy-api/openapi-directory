package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BankAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountName")
    public String accountName;
    public BankAccount withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountNumber")
    public String accountNumber;
    public BankAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public BankAccount withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BSB")
    public String bsb;
    public BankAccount withBsb(String bsb) {
        this.bsb = bsb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Remainder")
    public Boolean remainder;
    public BankAccount withRemainder(Boolean remainder) {
        this.remainder = remainder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementText")
    public String statementText;
    public BankAccount withStatementText(String statementText) {
        this.statementText = statementText;
        return this;
    }
}