"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var bankaccounts_1 = require("./bankaccounts");
var fees_1 = require("./fees");
var financialproducts_1 = require("./financialproducts");
var investmentproducttransactions_1 = require("./investmentproducttransactions");
var investmentproducts_1 = require("./investmentproducts");
var investoraccounts_1 = require("./investoraccounts");
var investors_1 = require("./investors");
var payments_1 = require("./payments");
var portfoliotemplates_1 = require("./portfoliotemplates");
var potsholdingsandtransactions_1 = require("./potsholdingsandtransactions");
var rates_1 = require("./rates");
var rebalance_1 = require("./rebalance");
var switchinstruction_1 = require("./switchinstruction");
var testmethods_1 = require("./testmethods");
var utility_1 = require("./utility");
var withdrawal_1 = require("./withdrawal");
exports.ServerList = [
    "https://wos-gb.demo.wealthos.cloud",
];
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.bankAccounts = new bankaccounts_1.BankAccounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.fees = new fees_1.Fees(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.financialProducts = new financialproducts_1.FinancialProducts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.investmentProductTransactions = new investmentproducttransactions_1.InvestmentProductTransactions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.investmentProducts = new investmentproducts_1.InvestmentProducts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.investorAccounts = new investoraccounts_1.InvestorAccounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.investors = new investors_1.Investors(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.payments = new payments_1.Payments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.portfolioTemplates = new portfoliotemplates_1.PortfolioTemplates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.potsHoldingsAndTransactions = new potsholdingsandtransactions_1.PotsHoldingsAndTransactions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.rates = new rates_1.Rates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.rebalance = new rebalance_1.Rebalance(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.switchInstruction = new switchinstruction_1.SwitchInstruction(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.testMethods = new testmethods_1.TestMethods(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.utility = new utility_1.Utility(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.withdrawal = new withdrawal_1.Withdrawal(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
