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
exports.TransactionCategory = exports.TransactionCategoryClassificationEnum = void 0;
var utils_1 = require("../../../internal/utils");
var detailcategory_1 = require("./detailcategory");
var transaction_1 = require("./transaction");
var transaction_2 = require("./transaction");
var TransactionCategoryClassificationEnum;
(function (TransactionCategoryClassificationEnum) {
    TransactionCategoryClassificationEnum["Personal"] = "PERSONAL";
    TransactionCategoryClassificationEnum["Business"] = "BUSINESS";
})(TransactionCategoryClassificationEnum = exports.TransactionCategoryClassificationEnum || (exports.TransactionCategoryClassificationEnum = {}));
var TransactionCategory = /** @class */ (function (_super) {
    __extends(TransactionCategory, _super);
    function TransactionCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], TransactionCategory.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification" }),
        __metadata("design:type", String)
    ], TransactionCategory.prototype, "classification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultCategoryName" }),
        __metadata("design:type", String)
    ], TransactionCategory.prototype, "defaultCategoryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultHighLevelCategoryName" }),
        __metadata("design:type", String)
    ], TransactionCategory.prototype, "defaultHighLevelCategoryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detailCategory", elemType: detailcategory_1.DetailCategory }),
        __metadata("design:type", Array)
    ], TransactionCategory.prototype, "detailCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=highLevelCategoryId" }),
        __metadata("design:type", Number)
    ], TransactionCategory.prototype, "highLevelCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=highLevelCategoryName" }),
        __metadata("design:type", String)
    ], TransactionCategory.prototype, "highLevelCategoryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TransactionCategory.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], TransactionCategory.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransactionCategory.prototype, "type", void 0);
    return TransactionCategory;
}(utils_1.SpeakeasyBase));
exports.TransactionCategory = TransactionCategory;
