"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statement = void 0;
var utils_1 = require("../../../internal/utils");
var money_1 = require("./money");
var Statement = /** @class */ (function (_super) {
    __extends(Statement, _super);
    function Statement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], Statement.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountDue" }),
        __metadata("design:type", money_1.Money)
    ], Statement.prototype, "amountDue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apr" }),
        __metadata("design:type", Number)
    ], Statement.prototype, "apr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriodEnd" }),
        __metadata("design:type", String)
    ], Statement.prototype, "billingPeriodEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriodStart" }),
        __metadata("design:type", String)
    ], Statement.prototype, "billingPeriodStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cashAdvance" }),
        __metadata("design:type", money_1.Money)
    ], Statement.prototype, "cashAdvance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cashApr" }),
        __metadata("design:type", Number)
    ], Statement.prototype, "cashApr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dueDate" }),
        __metadata("design:type", String)
    ], Statement.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Statement.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interestAmount" }),
        __metadata("design:type", money_1.Money)
    ], Statement.prototype, "interestAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isLatest" }),
        __metadata("design:type", Boolean)
    ], Statement.prototype, "isLatest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastPaymentAmount" }),
        __metadata("design:type", money_1.Money)
    ], Statement.prototype, "lastPaymentAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastPaymentDate" }),
        __metadata("design:type", String)
    ], Statement.prototype, "lastPaymentDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", String)
    ], Statement.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loanBalance" }),
        __metadata("design:type", money_1.Money)
    ], Statement.prototype, "loanBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumPayment" }),
        __metadata("design:type", money_1.Money)
    ], Statement.prototype, "minimumPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newCharges" }),
        __metadata("design:type", money_1.Money)
    ], Statement.prototype, "newCharges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=principalAmount" }),
        __metadata("design:type", money_1.Money)
    ], Statement.prototype, "principalAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statementDate" }),
        __metadata("design:type", String)
    ], Statement.prototype, "statementDate", void 0);
    return Statement;
}(utils_1.SpeakeasyBase));
exports.Statement = Statement;
