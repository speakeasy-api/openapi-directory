/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * TransactionDetailDebtTransactionTypeEnum - If the transaction is a debt/loan account transaction, the type of transaction
 */
public enum TransactionDetailDebtTransactionTypeEnum {
    PAYMENT("payment"),
    REFUND("refund"),
    FEE("fee"),
    INTEREST("interest"),
    ESCROW("escrow"),
    BALANCED_ADJUSTMENT("balancedAdjustment"),
    CREDIT("credit"),
    CHARGE("charge"),
    LESS_THAN_NIL_GREATER_THAN("<nil>");

    @JsonValue
    public final String value;

    private TransactionDetailDebtTransactionTypeEnum(String value) {
        this.value = value;
    }
}
