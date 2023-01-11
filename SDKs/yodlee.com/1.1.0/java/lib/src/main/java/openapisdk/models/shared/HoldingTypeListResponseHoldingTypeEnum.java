package openapisdk.models.shared;


public enum HoldingTypeListResponseHoldingTypeEnum {
    STOCK("stock"),
    MUTUAL_FUND("mutualFund"),
    BOND("bond"),
    CD("CD"),
    OPTION("option"),
    MONEY_MARKET_FUND("moneyMarketFund"),
    OTHER("other"),
    REMIC("remic"),
    FUTURE("future"),
    COMMODITY("commodity"),
    CURRENCY("currency"),
    UNIT_INVESTMENT_TRUST("unitInvestmentTrust"),
    EMPLOYEE_STOCK_OPTION("employeeStockOption"),
    INSURANCE_ANNUITY("insuranceAnnuity"),
    UNKNOWN("unknown"),
    PREFERRED_STOCK("preferredStock"),
    ETF("ETF"),
    WARRANTS("warrants"),
    ETN("ETN");

    public final String value;

    private HoldingTypeListResponseHoldingTypeEnum(String value) {
        this.value = value;
    }
}
