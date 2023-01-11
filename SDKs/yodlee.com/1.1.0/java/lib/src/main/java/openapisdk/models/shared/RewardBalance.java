package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RewardBalance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Double balance;
    public RewardBalance withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceToLevel")
    public String balanceToLevel;
    public RewardBalance withBalanceToLevel(String balanceToLevel) {
        this.balanceToLevel = balanceToLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceToReward")
    public String balanceToReward;
    public RewardBalance withBalanceToReward(String balanceToReward) {
        this.balanceToReward = balanceToReward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceType")
    public RewardBalanceBalanceTypeEnum balanceType;
    public RewardBalance withBalanceType(RewardBalanceBalanceTypeEnum balanceType) {
        this.balanceType = balanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RewardBalance withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryDate")
    public String expiryDate;
    public RewardBalance withExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public RewardBalance withUnits(String units) {
        this.units = units;
        return this;
    }
}