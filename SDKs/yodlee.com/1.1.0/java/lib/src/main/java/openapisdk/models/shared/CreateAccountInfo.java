package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAccountInfo {
    @JsonProperty("accountName")
    public String accountName;
    public CreateAccountInfo withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public CreateAccountInfo withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("accountType")
    public String accountType;
    public CreateAccountInfo withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress address;
    public CreateAccountInfo withAddress(AccountAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountDue")
    public Money amountDue;
    public CreateAccountInfo withAmountDue(Money amountDue) {
        this.amountDue = amountDue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Money balance;
    public CreateAccountInfo withBalance(Money balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public String dueDate;
    public CreateAccountInfo withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public CreateAccountInfoFrequencyEnum frequency;
    public CreateAccountInfo withFrequency(CreateAccountInfoFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeValue")
    public Money homeValue;
    public CreateAccountInfo withHomeValue(Money homeValue) {
        this.homeValue = homeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeInNetWorth")
    public String includeInNetWorth;
    public CreateAccountInfo withIncludeInNetWorth(String includeInNetWorth) {
        this.includeInNetWorth = includeInNetWorth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public CreateAccountInfo withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public CreateAccountInfo withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valuationType")
    public CreateAccountInfoValuationTypeEnum valuationType;
    public CreateAccountInfo withValuationType(CreateAccountInfoValuationTypeEnum valuationType) {
        this.valuationType = valuationType;
        return this;
    }
}