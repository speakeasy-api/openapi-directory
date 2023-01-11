package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsHolding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public DataExtractsHolding withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accruedIncome")
    public Money accruedIncome;
    public DataExtractsHolding withAccruedIncome(Money accruedIncome) {
        this.accruedIncome = accruedIncome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accruedInterest")
    public Money accruedInterest;
    public DataExtractsHolding withAccruedInterest(Money accruedInterest) {
        this.accruedInterest = accruedInterest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractQuantity")
    public Double contractQuantity;
    public DataExtractsHolding withContractQuantity(Double contractQuantity) {
        this.contractQuantity = contractQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costBasis")
    public Money costBasis;
    public DataExtractsHolding withCostBasis(Money costBasis) {
        this.costBasis = costBasis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponRate")
    public Double couponRate;
    public DataExtractsHolding withCouponRate(Double couponRate) {
        this.couponRate = couponRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public DataExtractsHolding withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cusipNumber")
    public String cusipNumber;
    public DataExtractsHolding withCusipNumber(String cusipNumber) {
        this.cusipNumber = cusipNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DataExtractsHolding withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrichedDescription")
    public String enrichedDescription;
    public DataExtractsHolding withEnrichedDescription(String enrichedDescription) {
        this.enrichedDescription = enrichedDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exercisedQuantity")
    public Double exercisedQuantity;
    public DataExtractsHolding withExercisedQuantity(Double exercisedQuantity) {
        this.exercisedQuantity = exercisedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;
    public DataExtractsHolding withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grantDate")
    public String grantDate;
    public DataExtractsHolding withGrantDate(String grantDate) {
        this.grantDate = grantDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdingType")
    public DataExtractsHoldingHoldingTypeEnum holdingType;
    public DataExtractsHolding withHoldingType(DataExtractsHoldingHoldingTypeEnum holdingType) {
        this.holdingType = holdingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DataExtractsHolding withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestRate")
    public Double interestRate;
    public DataExtractsHolding withInterestRate(Double interestRate) {
        this.interestRate = interestRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isShort")
    public Boolean isShort;
    public DataExtractsHolding withIsShort(Boolean isShort) {
        this.isShort = isShort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isin")
    public String isin;
    public DataExtractsHolding withIsin(String isin) {
        this.isin = isin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public DataExtractsHolding withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchStatus")
    public String matchStatus;
    public DataExtractsHolding withMatchStatus(String matchStatus) {
        this.matchStatus = matchStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maturityDate")
    public String maturityDate;
    public DataExtractsHolding withMaturityDate(String maturityDate) {
        this.maturityDate = maturityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optionType")
    public DataExtractsHoldingOptionTypeEnum optionType;
    public DataExtractsHolding withOptionType(DataExtractsHoldingOptionTypeEnum optionType) {
        this.optionType = optionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public DataExtractsHolding withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public DataExtractsHolding withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public DataExtractsHolding withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityStyle")
    public String securityStyle;
    public DataExtractsHolding withSecurityStyle(String securityStyle) {
        this.securityStyle = securityStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityType")
    public String securityType;
    public DataExtractsHolding withSecurityType(String securityType) {
        this.securityType = securityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sedol")
    public String sedol;
    public DataExtractsHolding withSedol(String sedol) {
        this.sedol = sedol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spread")
    public Money spread;
    public DataExtractsHolding withSpread(Money spread) {
        this.spread = spread;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strikePrice")
    public Money strikePrice;
    public DataExtractsHolding withStrikePrice(Money strikePrice) {
        this.strikePrice = strikePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbol")
    public String symbol;
    public DataExtractsHolding withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public DataExtractsHolding withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unvestedQuantity")
    public Double unvestedQuantity;
    public DataExtractsHolding withUnvestedQuantity(Double unvestedQuantity) {
        this.unvestedQuantity = unvestedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unvestedValue")
    public Money unvestedValue;
    public DataExtractsHolding withUnvestedValue(Money unvestedValue) {
        this.unvestedValue = unvestedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Money value;
    public DataExtractsHolding withValue(Money value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestedQuantity")
    public Double vestedQuantity;
    public DataExtractsHolding withVestedQuantity(Double vestedQuantity) {
        this.vestedQuantity = vestedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestedSharesExercisable")
    public Double vestedSharesExercisable;
    public DataExtractsHolding withVestedSharesExercisable(Double vestedSharesExercisable) {
        this.vestedSharesExercisable = vestedSharesExercisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestedValue")
    public Money vestedValue;
    public DataExtractsHolding withVestedValue(Money vestedValue) {
        this.vestedValue = vestedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestingDate")
    public String vestingDate;
    public DataExtractsHolding withVestingDate(String vestingDate) {
        this.vestingDate = vestingDate;
        return this;
    }
}