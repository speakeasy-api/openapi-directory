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
exports.VerifyTransactionCriteria = exports.VerifyTransactionCriteriaInput = exports.VerifyTransactionCriteriaMatchedEnum = exports.VerifyTransactionCriteriaBaseTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var transaction_1 = require("./transaction");
var VerifyTransactionCriteriaBaseTypeEnum;
(function (VerifyTransactionCriteriaBaseTypeEnum) {
    VerifyTransactionCriteriaBaseTypeEnum["Credit"] = "CREDIT";
    VerifyTransactionCriteriaBaseTypeEnum["Debit"] = "DEBIT";
})(VerifyTransactionCriteriaBaseTypeEnum = exports.VerifyTransactionCriteriaBaseTypeEnum || (exports.VerifyTransactionCriteriaBaseTypeEnum = {}));
var VerifyTransactionCriteriaMatchedEnum;
(function (VerifyTransactionCriteriaMatchedEnum) {
    VerifyTransactionCriteriaMatchedEnum["Complete"] = "COMPLETE";
    VerifyTransactionCriteriaMatchedEnum["None"] = "NONE";
})(VerifyTransactionCriteriaMatchedEnum = exports.VerifyTransactionCriteriaMatchedEnum || (exports.VerifyTransactionCriteriaMatchedEnum = {}));
var VerifyTransactionCriteriaInput = /** @class */ (function (_super) {
    __extends(VerifyTransactionCriteriaInput, _super);
    function VerifyTransactionCriteriaInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], VerifyTransactionCriteriaInput.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseType" }),
        __metadata("design:type", String)
    ], VerifyTransactionCriteriaInput.prototype, "baseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], VerifyTransactionCriteriaInput.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateVariance" }),
        __metadata("design:type", String)
    ], VerifyTransactionCriteriaInput.prototype, "dateVariance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keyword" }),
        __metadata("design:type", String)
    ], VerifyTransactionCriteriaInput.prototype, "keyword", void 0);
    return VerifyTransactionCriteriaInput;
}(utils_1.SpeakeasyBase));
exports.VerifyTransactionCriteriaInput = VerifyTransactionCriteriaInput;
var VerifyTransactionCriteria = /** @class */ (function (_super) {
    __extends(VerifyTransactionCriteria, _super);
    function VerifyTransactionCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], VerifyTransactionCriteria.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseType" }),
        __metadata("design:type", String)
    ], VerifyTransactionCriteria.prototype, "baseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], VerifyTransactionCriteria.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateVariance" }),
        __metadata("design:type", String)
    ], VerifyTransactionCriteria.prototype, "dateVariance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keyword" }),
        __metadata("design:type", String)
    ], VerifyTransactionCriteria.prototype, "keyword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=matched" }),
        __metadata("design:type", String)
    ], VerifyTransactionCriteria.prototype, "matched", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verifiedTransaction", elemType: transaction_1.Transaction }),
        __metadata("design:type", Array)
    ], VerifyTransactionCriteria.prototype, "verifiedTransaction", void 0);
    return VerifyTransactionCriteria;
}(utils_1.SpeakeasyBase));
exports.VerifyTransactionCriteria = VerifyTransactionCriteria;
