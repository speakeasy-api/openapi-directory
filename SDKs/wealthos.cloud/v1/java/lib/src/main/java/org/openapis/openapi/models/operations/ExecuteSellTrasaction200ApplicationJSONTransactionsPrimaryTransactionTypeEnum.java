/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ExecuteSellTrasaction200ApplicationJSONTransactionsPrimaryTransactionTypeEnum {
    FEES("Fees"),
    BUY("Buy"),
    SELL("Sell"),
    TRANSFERS("Transfers"),
    INCOME("Income"),
    TAX("Tax"),
    CONTRIBUTION("Contribution"),
    WITHDRAWAL("Withdrawal"),
    CORPORATE_ACTIONS("Corporate actions");

    @JsonValue
    public final String value;

    private ExecuteSellTrasaction200ApplicationJSONTransactionsPrimaryTransactionTypeEnum(String value) {
        this.value = value;
    }
}
