import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllFinancialProductsQueryParams extends SpeakeasyBase {
    productTypes?: string;
}
export declare class GetAllFinancialProductsHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class GetAllFinancialProductsSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare enum GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum {
    Yes = "YES",
    No = "NO"
}
export declare class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences extends SpeakeasyBase {
    interestAccrualBasis?: string;
    interestPaymentFrequency?: string;
    payInterest?: string;
}
export declare class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences extends SpeakeasyBase {
    minimumOneOffInvestment?: string;
    minimumRegularMonthlyInvestment?: string;
    regularInvestmentDates?: string[];
    regularInvestmentFrequencies?: string[];
}
export declare class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences extends SpeakeasyBase {
    minimumOneOffWithdrawal?: string;
    minimumRegularMonthlyWithdrawal?: string;
    regularWithdrawalFrequencies?: string[];
    regularWithdrawalPaymentDates?: string[];
}
export declare class GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts extends SpeakeasyBase {
    additionalCashCurrencies?: string[];
    availability?: string[];
    createdAt?: Date;
    dividendOptions?: string[];
    financialProductId: string;
    flexible?: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsFlexibleEnum;
    interestPreferences?: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInterestPreferences;
    investmentPreferences?: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsInvestmentPreferences;
    name: string;
    productType: string;
    updatedAt?: Date;
    withdrawalPreferences?: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProductsWithdrawalPreferences;
}
export declare class GetAllFinancialProducts200ApplicationJson extends SpeakeasyBase {
    financialProducts: GetAllFinancialProducts200ApplicationJsonRootTypeForFinancialProducts[];
}
export declare class GetAllFinancialProductsRequest extends SpeakeasyBase {
    queryParams: GetAllFinancialProductsQueryParams;
    headers: GetAllFinancialProductsHeaders;
    security: GetAllFinancialProductsSecurity;
}
export declare class GetAllFinancialProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllFinancialProducts200ApplicationJSONObject?: GetAllFinancialProducts200ApplicationJson;
    getAllFinancialProducts400ApplicationJSONAny?: any;
    getAllFinancialProducts401ApplicationJSONAny?: any;
    getAllFinancialProducts403ApplicationJSONAny?: any;
    getAllFinancialProducts404ApplicationJSONAny?: any;
    getAllFinancialProducts429ApplicationJSONAny?: any;
    getAllFinancialProducts500ApplicationJSONAny?: any;
}
