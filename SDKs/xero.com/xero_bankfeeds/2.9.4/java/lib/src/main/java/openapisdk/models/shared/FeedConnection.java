package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeedConnection

 * https://developer.xero.com/documentation/bank-feeds-api/feed-connections
**/
public class FeedConnection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public FeedConnection withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public FeedConnection withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public FeedConnection withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountToken")
    public String accountToken;
    public FeedConnection withAccountToken(String accountToken) {
        this.accountToken = accountToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public Object accountType;
    public FeedConnection withAccountType(Object accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public CountryCodeEnum country;
    public FeedConnection withCountry(CountryCodeEnum country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyCodeEnum currency;
    public FeedConnection withCurrency(CurrencyCodeEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public FeedConnection withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FeedConnection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public FeedConnectionStatusEnum status;
    public FeedConnection withStatus(FeedConnectionStatusEnum status) {
        this.status = status;
        return this;
    }
}