package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAccountInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public UpdateAccountInfo withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public UpdateAccountInfo withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountStatus")
    public UpdateAccountInfoAccountStatusEnum accountStatus;
    public UpdateAccountInfo withAccountStatus(UpdateAccountInfoAccountStatusEnum accountStatus) {
        this.accountStatus = accountStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress address;
    public UpdateAccountInfo withAddress(AccountAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountDue")
    public Money amountDue;
    public UpdateAccountInfo withAmountDue(Money amountDue) {
        this.amountDue = amountDue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Money balance;
    public UpdateAccountInfo withBalance(Money balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public UpdateAccountInfoContainerEnum container;
    public UpdateAccountInfo withContainer(UpdateAccountInfoContainerEnum container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public String dueDate;
    public UpdateAccountInfo withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public UpdateAccountInfoFrequencyEnum frequency;
    public UpdateAccountInfo withFrequency(UpdateAccountInfoFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeValue")
    public Money homeValue;
    public UpdateAccountInfo withHomeValue(Money homeValue) {
        this.homeValue = homeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeInNetWorth")
    public String includeInNetWorth;
    public UpdateAccountInfo withIncludeInNetWorth(String includeInNetWorth) {
        this.includeInNetWorth = includeInNetWorth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEbillEnrolled")
    public String isEbillEnrolled;
    public UpdateAccountInfo withIsEbillEnrolled(String isEbillEnrolled) {
        this.isEbillEnrolled = isEbillEnrolled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public UpdateAccountInfo withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public UpdateAccountInfo withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}