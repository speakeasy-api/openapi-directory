package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Holding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public Holding withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accruedIncome")
    public Money accruedIncome;
    public Holding withAccruedIncome(Money accruedIncome) {
        this.accruedIncome = accruedIncome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accruedInterest")
    public Money accruedInterest;
    public Holding withAccruedInterest(Money accruedInterest) {
        this.accruedInterest = accruedInterest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetClassification")
    public AssetClassification[] assetClassification;
    public Holding withAssetClassification(AssetClassification[] assetClassification) {
        this.assetClassification = assetClassification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractQuantity")
    public Double contractQuantity;
    public Holding withContractQuantity(Double contractQuantity) {
        this.contractQuantity = contractQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costBasis")
    public Money costBasis;
    public Holding withCostBasis(Money costBasis) {
        this.costBasis = costBasis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponRate")
    public Double couponRate;
    public Holding withCouponRate(Double couponRate) {
        this.couponRate = couponRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public Holding withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cusipNumber")
    public String cusipNumber;
    public Holding withCusipNumber(String cusipNumber) {
        this.cusipNumber = cusipNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Holding withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrichedDescription")
    public String enrichedDescription;
    public Holding withEnrichedDescription(String enrichedDescription) {
        this.enrichedDescription = enrichedDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exercisedQuantity")
    public Double exercisedQuantity;
    public Holding withExercisedQuantity(Double exercisedQuantity) {
        this.exercisedQuantity = exercisedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;
    public Holding withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grantDate")
    public String grantDate;
    public Holding withGrantDate(String grantDate) {
        this.grantDate = grantDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdingType")
    public HoldingHoldingTypeEnum holdingType;
    public Holding withHoldingType(HoldingHoldingTypeEnum holdingType) {
        this.holdingType = holdingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Holding withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestRate")
    public Double interestRate;
    public Holding withInterestRate(Double interestRate) {
        this.interestRate = interestRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isShort")
    public Boolean isShort;
    public Holding withIsShort(Boolean isShort) {
        this.isShort = isShort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isin")
    public String isin;
    public Holding withIsin(String isin) {
        this.isin = isin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public Holding withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchStatus")
    public String matchStatus;
    public Holding withMatchStatus(String matchStatus) {
        this.matchStatus = matchStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maturityDate")
    public String maturityDate;
    public Holding withMaturityDate(String maturityDate) {
        this.maturityDate = maturityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optionType")
    public HoldingOptionTypeEnum optionType;
    public Holding withOptionType(HoldingOptionTypeEnum optionType) {
        this.optionType = optionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public Holding withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public Holding withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public Holding withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityStyle")
    public String securityStyle;
    public Holding withSecurityStyle(String securityStyle) {
        this.securityStyle = securityStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityType")
    public String securityType;
    public Holding withSecurityType(String securityType) {
        this.securityType = securityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sedol")
    public String sedol;
    public Holding withSedol(String sedol) {
        this.sedol = sedol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spread")
    public Money spread;
    public Holding withSpread(Money spread) {
        this.spread = spread;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strikePrice")
    public Money strikePrice;
    public Holding withStrikePrice(Money strikePrice) {
        this.strikePrice = strikePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbol")
    public String symbol;
    public Holding withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public Holding withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unvestedQuantity")
    public Double unvestedQuantity;
    public Holding withUnvestedQuantity(Double unvestedQuantity) {
        this.unvestedQuantity = unvestedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unvestedValue")
    public Money unvestedValue;
    public Holding withUnvestedValue(Money unvestedValue) {
        this.unvestedValue = unvestedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Money value;
    public Holding withValue(Money value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestedQuantity")
    public Double vestedQuantity;
    public Holding withVestedQuantity(Double vestedQuantity) {
        this.vestedQuantity = vestedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestedSharesExercisable")
    public Double vestedSharesExercisable;
    public Holding withVestedSharesExercisable(Double vestedSharesExercisable) {
        this.vestedSharesExercisable = vestedSharesExercisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestedValue")
    public Money vestedValue;
    public Holding withVestedValue(Money vestedValue) {
        this.vestedValue = vestedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vestingDate")
    public String vestingDate;
    public Holding withVestingDate(String vestingDate) {
        this.vestingDate = vestingDate;
        return this;
    }
}