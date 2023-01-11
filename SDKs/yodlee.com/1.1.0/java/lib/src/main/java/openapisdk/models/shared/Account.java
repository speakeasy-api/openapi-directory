package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("401kLoan")
    public Money fourHundredAndOnekLoan;
    public Account withFourHundredAndOnekLoan(Money fourHundredAndOnekLoan) {
        this.fourHundredAndOnekLoan = fourHundredAndOnekLoan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CONTAINER")
    public AccountContainerEnum container;
    public Account withContainer(AccountContainerEnum container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public Account withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public Account withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountStatus")
    public AccountAccountStatusEnum accountStatus;
    public Account withAccountStatus(AccountAccountStatusEnum accountStatus) {
        this.accountStatus = accountStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public Account withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress address;
    public Account withAddress(AccountAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationSource")
    public AccountAggregationSourceEnum aggregationSource;
    public Account withAggregationSource(AccountAggregationSourceEnum aggregationSource) {
        this.aggregationSource = aggregationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountDue")
    public Money amountDue;
    public Account withAmountDue(Money amountDue) {
        this.amountDue = amountDue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annualPercentageYield")
    public Double annualPercentageYield;
    public Account withAnnualPercentageYield(Double annualPercentageYield) {
        this.annualPercentageYield = annualPercentageYield;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annuityBalance")
    public Money annuityBalance;
    public Account withAnnuityBalance(Money annuityBalance) {
        this.annuityBalance = annuityBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apr")
    public Double apr;
    public Account withApr(Double apr) {
        this.apr = apr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedProviderAccountId")
    public Long[] associatedProviderAccountId;
    public Account withAssociatedProviderAccountId(Long[] associatedProviderAccountId) {
        this.associatedProviderAccountId = associatedProviderAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRefresh")
    public AutoRefresh autoRefresh;
    public Account withAutoRefresh(AutoRefresh autoRefresh) {
        this.autoRefresh = autoRefresh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableBalance")
    public Money availableBalance;
    public Account withAvailableBalance(Money availableBalance) {
        this.availableBalance = availableBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableCash")
    public Money availableCash;
    public Account withAvailableCash(Money availableCash) {
        this.availableCash = availableCash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableCredit")
    public Money availableCredit;
    public Account withAvailableCredit(Money availableCredit) {
        this.availableCredit = availableCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Money balance;
    public Account withBalance(Money balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankTransferCode")
    public BankTransferCode[] bankTransferCode;
    public Account withBankTransferCode(BankTransferCode[] bankTransferCode) {
        this.bankTransferCode = bankTransferCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash")
    public Money cash;
    public Account withCash(Money cash) {
        this.cash = cash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashApr")
    public Double cashApr;
    public Account withCashApr(Double cashApr) {
        this.cashApr = cashApr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashValue")
    public Money cashValue;
    public Account withCashValue(Money cashValue) {
        this.cashValue = cashValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public AccountClassificationEnum classification;
    public Account withClassification(AccountClassificationEnum classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collateral")
    public String collateral;
    public Account withCollateral(String collateral) {
        this.collateral = collateral;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage")
    public Coverage[] coverage;
    public Account withCoverage(Coverage[] coverage) {
        this.coverage = coverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public Account withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentBalance")
    public Money currentBalance;
    public Account withCurrentBalance(Money currentBalance) {
        this.currentBalance = currentBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentLevel")
    public String currentLevel;
    public Account withCurrentLevel(String currentLevel) {
        this.currentLevel = currentLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public AccountDataset[] dataset;
    public Account withDataset(AccountDataset[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deathBenefit")
    public Money deathBenefit;
    public Account withDeathBenefit(Money deathBenefit) {
        this.deathBenefit = deathBenefit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("derivedApr")
    public Double derivedApr;
    public Account withDerivedApr(Double derivedApr) {
        this.derivedApr = derivedApr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayedName")
    public String displayedName;
    public Account withDisplayedName(String displayedName) {
        this.displayedName = displayedName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public String dueDate;
    public Account withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrollmentDate")
    public String enrollmentDate;
    public Account withEnrollmentDate(String enrollmentDate) {
        this.enrollmentDate = enrollmentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("escrowBalance")
    public Money escrowBalance;
    public Account withEscrowBalance(Money escrowBalance) {
        this.escrowBalance = escrowBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedDate")
    public String estimatedDate;
    public Account withEstimatedDate(String estimatedDate) {
        this.estimatedDate = estimatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;
    public Account withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faceAmount")
    public Money faceAmount;
    public Account withFaceAmount(Money faceAmount) {
        this.faceAmount = faceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public AccountFrequencyEnum frequency;
    public Account withFrequency(AccountFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullAccountNumber")
    public String fullAccountNumber;
    public Account withFullAccountNumber(String fullAccountNumber) {
        this.fullAccountNumber = fullAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullAccountNumberList")
    public FullAccountNumberList fullAccountNumberList;
    public Account withFullAccountNumberList(FullAccountNumberList fullAccountNumberList) {
        this.fullAccountNumberList = fullAccountNumberList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guarantor")
    public String guarantor;
    public Account withGuarantor(String guarantor) {
        this.guarantor = guarantor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holder")
    public AccountHolder[] holder;
    public Account withHolder(AccountHolder[] holder) {
        this.holder = holder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeInsuranceType")
    public AccountHomeInsuranceTypeEnum homeInsuranceType;
    public Account withHomeInsuranceType(AccountHomeInsuranceTypeEnum homeInsuranceType) {
        this.homeInsuranceType = homeInsuranceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeValue")
    public Money homeValue;
    public Account withHomeValue(Money homeValue) {
        this.homeValue = homeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Account withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeInNetWorth")
    public Boolean includeInNetWorth;
    public Account withIncludeInNetWorth(Boolean includeInNetWorth) {
        this.includeInNetWorth = includeInNetWorth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestPaidLastYear")
    public Money interestPaidLastYear;
    public Account withInterestPaidLastYear(Money interestPaidLastYear) {
        this.interestPaidLastYear = interestPaidLastYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestPaidYTD")
    public Money interestPaidYTD;
    public Account withInterestPaidYtd(Money interestPaidYTD) {
        this.interestPaidYTD = interestPaidYTD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestRate")
    public Double interestRate;
    public Account withInterestRate(Double interestRate) {
        this.interestRate = interestRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interestRateType")
    public AccountInterestRateTypeEnum interestRateType;
    public Account withInterestRateType(AccountInterestRateTypeEnum interestRateType) {
        this.interestRateType = interestRateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAsset")
    public Boolean isAsset;
    public Account withIsAsset(Boolean isAsset) {
        this.isAsset = isAsset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isManual")
    public Boolean isManual;
    public Account withIsManual(Boolean isManual) {
        this.isManual = isManual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEmployeeContributionAmount")
    public Money lastEmployeeContributionAmount;
    public Account withLastEmployeeContributionAmount(Money lastEmployeeContributionAmount) {
        this.lastEmployeeContributionAmount = lastEmployeeContributionAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEmployeeContributionDate")
    public String lastEmployeeContributionDate;
    public Account withLastEmployeeContributionDate(String lastEmployeeContributionDate) {
        this.lastEmployeeContributionDate = lastEmployeeContributionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPayment")
    public Money lastPayment;
    public Account withLastPayment(Money lastPayment) {
        this.lastPayment = lastPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPaymentAmount")
    public Money lastPaymentAmount;
    public Account withLastPaymentAmount(Money lastPaymentAmount) {
        this.lastPaymentAmount = lastPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPaymentDate")
    public String lastPaymentDate;
    public Account withLastPaymentDate(String lastPaymentDate) {
        this.lastPaymentDate = lastPaymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public Account withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lender")
    public String lender;
    public Account withLender(String lender) {
        this.lender = lender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifeInsuranceType")
    public AccountLifeInsuranceTypeEnum lifeInsuranceType;
    public Account withLifeInsuranceType(AccountLifeInsuranceTypeEnum lifeInsuranceType) {
        this.lifeInsuranceType = lifeInsuranceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loanPayByDate")
    public String loanPayByDate;
    public Account withLoanPayByDate(String loanPayByDate) {
        this.loanPayByDate = loanPayByDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loanPayoffAmount")
    public Money loanPayoffAmount;
    public Account withLoanPayoffAmount(Money loanPayoffAmount) {
        this.loanPayoffAmount = loanPayoffAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loanPayoffDetails")
    public LoanPayoffDetails loanPayoffDetails;
    public Account withLoanPayoffDetails(LoanPayoffDetails loanPayoffDetails) {
        this.loanPayoffDetails = loanPayoffDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marginBalance")
    public Money marginBalance;
    public Account withMarginBalance(Money marginBalance) {
        this.marginBalance = marginBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maturityAmount")
    public Money maturityAmount;
    public Account withMaturityAmount(Money maturityAmount) {
        this.maturityAmount = maturityAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maturityDate")
    public String maturityDate;
    public Account withMaturityDate(String maturityDate) {
        this.maturityDate = maturityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memo")
    public String memo;
    public Account withMemo(String memo) {
        this.memo = memo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumAmountDue")
    public Money minimumAmountDue;
    public Account withMinimumAmountDue(Money minimumAmountDue) {
        this.minimumAmountDue = minimumAmountDue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moneyMarketBalance")
    public Money moneyMarketBalance;
    public Account withMoneyMarketBalance(Money moneyMarketBalance) {
        this.moneyMarketBalance = moneyMarketBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLevel")
    public String nextLevel;
    public Account withNextLevel(String nextLevel) {
        this.nextLevel = nextLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public Account withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthMigrationStatus")
    public AccountOauthMigrationStatusEnum oauthMigrationStatus;
    public Account withOauthMigrationStatus(AccountOauthMigrationStatusEnum oauthMigrationStatus) {
        this.oauthMigrationStatus = oauthMigrationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalLoanAmount")
    public Money originalLoanAmount;
    public Account withOriginalLoanAmount(Money originalLoanAmount) {
        this.originalLoanAmount = originalLoanAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originationDate")
    public String originationDate;
    public Account withOriginationDate(String originationDate) {
        this.originationDate = originationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overDraftLimit")
    public Money overDraftLimit;
    public Account withOverDraftLimit(Money overDraftLimit) {
        this.overDraftLimit = overDraftLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentProfile")
    public PaymentProfile paymentProfile;
    public Account withPaymentProfile(PaymentProfile paymentProfile) {
        this.paymentProfile = paymentProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyEffectiveDate")
    public String policyEffectiveDate;
    public Account withPolicyEffectiveDate(String policyEffectiveDate) {
        this.policyEffectiveDate = policyEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyFromDate")
    public String policyFromDate;
    public Account withPolicyFromDate(String policyFromDate) {
        this.policyFromDate = policyFromDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyStatus")
    public AccountPolicyStatusEnum policyStatus;
    public Account withPolicyStatus(AccountPolicyStatusEnum policyStatus) {
        this.policyStatus = policyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyTerm")
    public String policyTerm;
    public Account withPolicyTerm(String policyTerm) {
        this.policyTerm = policyTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyToDate")
    public String policyToDate;
    public Account withPolicyToDate(String policyToDate) {
        this.policyToDate = policyToDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premium")
    public Money premium;
    public Account withPremium(Money premium) {
        this.premium = premium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premiumPaymentTerm")
    public String premiumPaymentTerm;
    public Account withPremiumPaymentTerm(String premiumPaymentTerm) {
        this.premiumPaymentTerm = premiumPaymentTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryRewardUnit")
    public String primaryRewardUnit;
    public Account withPrimaryRewardUnit(String primaryRewardUnit) {
        this.primaryRewardUnit = primaryRewardUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalBalance")
    public Money principalBalance;
    public Account withPrincipalBalance(Money principalBalance) {
        this.principalBalance = principalBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public AccountProfile profile;
    public Account withProfile(AccountProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public Account withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public String providerId;
    public Account withProviderId(String providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerName")
    public String providerName;
    public Account withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringPayment")
    public Money recurringPayment;
    public Account withRecurringPayment(Money recurringPayment) {
        this.recurringPayment = recurringPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingBalance")
    public Money remainingBalance;
    public Account withRemainingBalance(Money remainingBalance) {
        this.remainingBalance = remainingBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repaymentPlanType")
    public AccountRepaymentPlanTypeEnum repaymentPlanType;
    public Account withRepaymentPlanType(AccountRepaymentPlanTypeEnum repaymentPlanType) {
        this.repaymentPlanType = repaymentPlanType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rewardBalance")
    public RewardBalance[] rewardBalance;
    public Account withRewardBalance(RewardBalance[] rewardBalance) {
        this.rewardBalance = rewardBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runningBalance")
    public Money runningBalance;
    public Account withRunningBalance(Money runningBalance) {
        this.runningBalance = runningBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortBalance")
    public Money shortBalance;
    public Account withShortBalance(Money shortBalance) {
        this.shortBalance = shortBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountStatus")
    public AccountSourceAccountStatusEnum sourceAccountStatus;
    public Account withSourceAccountStatus(AccountSourceAccountStatusEnum sourceAccountStatus) {
        this.sourceAccountStatus = sourceAccountStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceId")
    public String sourceId;
    public Account withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("term")
    public String term;
    public Account withTerm(String term) {
        this.term = term;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCashLimit")
    public Money totalCashLimit;
    public Account withTotalCashLimit(Money totalCashLimit) {
        this.totalCashLimit = totalCashLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCreditLimit")
    public Money totalCreditLimit;
    public Account withTotalCreditLimit(Money totalCreditLimit) {
        this.totalCreditLimit = totalCreditLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCreditLine")
    public Money totalCreditLine;
    public Account withTotalCreditLine(Money totalCreditLine) {
        this.totalCreditLine = totalCreditLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUnvestedBalance")
    public Money totalUnvestedBalance;
    public Account withTotalUnvestedBalance(Money totalUnvestedBalance) {
        this.totalUnvestedBalance = totalUnvestedBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalVestedBalance")
    public Money totalVestedBalance;
    public Account withTotalVestedBalance(Money totalVestedBalance) {
        this.totalVestedBalance = totalVestedBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userClassification")
    public AccountUserClassificationEnum userClassification;
    public Account withUserClassification(AccountUserClassificationEnum userClassification) {
        this.userClassification = userClassification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valuationType")
    public AccountValuationTypeEnum valuationType;
    public Account withValuationType(AccountValuationTypeEnum valuationType) {
        this.valuationType = valuationType;
        return this;
    }
}