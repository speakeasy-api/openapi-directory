package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AccountsAccountListAccounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_name")
    public String accountName;
    public AccountsAccountListAccounts withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_number")
    public String accountNumber;
    public AccountsAccountListAccounts withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_type")
    public String accountType;
    public AccountsAccountListAccounts withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public AccountsAccountListAccounts withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountsAccountListAccounts withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_email")
    public String ownerEmail;
    public AccountsAccountListAccounts withOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seats")
    public Long seats;
    public AccountsAccountListAccounts withSeats(Long seats) {
        this.seats = seats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("subscription_end_time")
    public OffsetDateTime subscriptionEndTime;
    public AccountsAccountListAccounts withSubscriptionEndTime(OffsetDateTime subscriptionEndTime) {
        this.subscriptionEndTime = subscriptionEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("subscription_start_time")
    public OffsetDateTime subscriptionStartTime;
    public AccountsAccountListAccounts withSubscriptionStartTime(OffsetDateTime subscriptionStartTime) {
        this.subscriptionStartTime = subscriptionStartTime;
        return this;
    }
}