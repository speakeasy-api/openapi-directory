package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Transaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CONTAINER")
    public TransactionContainerEnum container;
    public Transaction withContainer(TransactionContainerEnum container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public Transaction withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Money amount;
    public Transaction withAmount(Money amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseType")
    public TransactionBaseTypeEnum baseType;
    public Transaction withBaseType(TransactionBaseTypeEnum baseType) {
        this.baseType = baseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public Transaction withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public Long categoryId;
    public Transaction withCategoryId(Long categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categorySource")
    public TransactionCategorySourceEnum categorySource;
    public Transaction withCategorySource(TransactionCategorySourceEnum categorySource) {
        this.categorySource = categorySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryType")
    public TransactionCategoryTypeEnum categoryType;
    public Transaction withCategoryType(TransactionCategoryTypeEnum categoryType) {
        this.categoryType = categoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkNumber")
    public String checkNumber;
    public Transaction withCheckNumber(String checkNumber) {
        this.checkNumber = checkNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commission")
    public Money commission;
    public Transaction withCommission(Money commission) {
        this.commission = commission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public Transaction withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cusipNumber")
    public String cusipNumber;
    public Transaction withCusipNumber(String cusipNumber) {
        this.cusipNumber = cusipNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public Transaction withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public Description description;
    public Transaction withDescription(Description description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailCategoryId")
    public Long detailCategoryId;
    public Transaction withDetailCategoryId(Long detailCategoryId) {
        this.detailCategoryId = detailCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highLevelCategoryId")
    public Long highLevelCategoryId;
    public Transaction withHighLevelCategoryId(Long highLevelCategoryId) {
        this.highLevelCategoryId = highLevelCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdingDescription")
    public String holdingDescription;
    public Transaction withHoldingDescription(String holdingDescription) {
        this.holdingDescription = holdingDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Transaction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interest")
    public Money interest;
    public Transaction withInterest(Money interest) {
        this.interest = interest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isManual")
    public Boolean isManual;
    public Transaction withIsManual(Boolean isManual) {
        this.isManual = isManual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isin")
    public String isin;
    public Transaction withIsin(String isin) {
        this.isin = isin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public Transaction withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public Transaction withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant")
    public Merchant merchant;
    public Transaction withMerchant(Merchant merchant) {
        this.merchant = merchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentCategoryId")
    public Long parentCategoryId;
    public Transaction withParentCategoryId(Long parentCategoryId) {
        this.parentCategoryId = parentCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postDate")
    public String postDate;
    public Transaction withPostDate(String postDate) {
        this.postDate = postDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public Transaction withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public Money principal;
    public Transaction withPrincipal(Money principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public Transaction withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runningBalance")
    public Money runningBalance;
    public Transaction withRunningBalance(Money runningBalance) {
        this.runningBalance = runningBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sedol")
    public String sedol;
    public Transaction withSedol(String sedol) {
        this.sedol = sedol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settleDate")
    public String settleDate;
    public Transaction withSettleDate(String settleDate) {
        this.settleDate = settleDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceId")
    public String sourceId;
    public Transaction withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceType")
    public TransactionSourceTypeEnum sourceType;
    public Transaction withSourceType(TransactionSourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TransactionStatusEnum status;
    public Transaction withStatus(TransactionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subType")
    public TransactionSubTypeEnum subType;
    public Transaction withSubType(TransactionSubTypeEnum subType) {
        this.subType = subType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbol")
    public String symbol;
    public Transaction withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionDate")
    public String transactionDate;
    public Transaction withTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Transaction withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valoren")
    public String valoren;
    public Transaction withValoren(String valoren) {
        this.valoren = valoren;
        return this;
    }
}